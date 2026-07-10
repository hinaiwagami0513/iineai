/**
 * sonner.js — shadcn/ui Sonner (vanilla JS)
 * Source of truth: github.com/emilkowalski/sonner/src/styles.css
 *
 * API:
 *   toast('message')
 *   toast.success('message')
 *   toast.error('message')
 *   toast.info('message')
 *   toast.warning('message')
 *   toast('message', { description: '...' })
 *   toast.dismiss(el)
 *
 * Position (default bottom-right):
 *   toast.position = 'bottom-right'
 */
(function () {
  var DURATION = 4000;
  var GAP = 14;
  var MAX_VISIBLE = 3;
  var WIDTH = 356;
  var OFFSET = 32;

  /* ---- rich-colors (from sonner source) ---- */
  var THEME = {
    success: { bg: 'hsl(143,85%,96%)', border: 'hsl(145,92%,87%)', text: 'hsl(140,100%,27%)' },
    error:   { bg: 'hsl(359,100%,97%)', border: 'hsl(359,100%,94%)', text: 'hsl(360,100%,45%)' },
    info:    { bg: 'hsl(208,100%,97%)', border: 'hsl(221,91%,93%)', text: 'hsl(210,92%,45%)' },
    warning: { bg: 'hsl(49,100%,97%)',  border: 'hsl(49,91%,84%)',  text: 'hsl(31,92%,45%)' },
  };

  /* ---- icons 16x16 (Sonner built-in) ---- */
  var ICONS = {
    success: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
    error:   '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
    info:    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
    warning: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  };

  var container = null;
  var position = 'bottom-right';

  function ensureContainer() {
    if (container) return container;
    container = document.createElement('div');
    container.setAttribute('data-sonner-toaster', '');
    var isBottom = position.indexOf('bottom') === 0;
    var xPos = position.split('-')[1] || 'right';
    var s = container.style;
    s.position = 'fixed';
    s.zIndex = '999999999';
    s.display = 'flex';
    s.flexDirection = isBottom ? 'column-reverse' : 'column';
    s.gap = GAP + 'px';
    s.pointerEvents = 'none';
    s.width = WIDTH + 'px';
    s.boxSizing = 'border-box';
    s.padding = '0';
    s.margin = '0';
    s.listStyle = 'none';
    s.outline = 'none';
    s.fontFamily = 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif';
    if (isBottom) s.bottom = OFFSET + 'px'; else s.top = OFFSET + 'px';
    if (xPos === 'right') s.right = OFFSET + 'px';
    else if (xPos === 'left') s.left = OFFSET + 'px';
    else { s.left = '50%'; s.transform = 'translateX(-50%)'; }
    document.body.appendChild(container);
    return container;
  }

  function createToast(message, opts) {
    opts = opts || {};
    var type = opts.type || 'default';
    var description = opts.description || '';
    var duration = typeof opts.duration === 'number' ? opts.duration : DURATION;

    ensureContainer();

    var el = document.createElement('div');
    el.setAttribute('data-sonner-toast', '');
    el.setAttribute('data-type', type);

    /* ---- base style (exact Sonner source values) ---- */
    var colors = THEME[type];
    var bg    = colors ? colors.bg     : '#fff';
    var bdr   = colors ? colors.border : 'hsl(0,0%,93%)';
    var txt   = colors ? colors.text   : 'hsl(0,0%,9%)';

    el.style.cssText = [
      'pointer-events:auto',
      'display:flex',
      'align-items:center',
      'gap:6px',
      'padding:16px',
      'border-radius:8px',
      'background:' + bg,
      'border:1px solid ' + bdr,
      'color:' + txt,
      'font-size:13px',
      'line-height:1.5',
      'box-shadow:0px 4px 12px rgba(0,0,0,0.1)',
      'width:' + WIDTH + 'px',
      'box-sizing:border-box',
      'overflow-wrap:anywhere',
      'transform:translateY(100%)',
      'opacity:0',
      'transition:transform 400ms ease,opacity 400ms ease',
      'cursor:pointer',
    ].join(';');

    /* ---- icon ---- */
    var iconSvg = ICONS[type] || '';
    var iconWrap = '';
    if (iconSvg) {
      iconWrap = '<div data-icon style="display:flex;height:16px;width:16px;flex-shrink:0;align-items:center;justify-content:flex-start;margin-left:-3px;margin-right:4px;">' + iconSvg + '</div>';
    }

    /* ---- content ---- */
    var contentHtml = '<div data-content style="display:flex;flex-direction:column;gap:2px;">' +
      '<div data-title style="font-weight:500;line-height:1.5;">' + escapeHtml(message) + '</div>' +
      (description
        ? '<div data-description style="font-weight:400;line-height:1.4;opacity:0.9;font-size:12px;">' + escapeHtml(description) + '</div>'
        : '') +
      '</div>';

    el.innerHTML = iconWrap + contentHtml;

    /* ---- dismiss on click ---- */
    el.addEventListener('click', function () { dismiss(el); });

    /* ---- append & animate in ---- */
    container.appendChild(el);
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        el.style.transform = 'translateY(0)';
        el.style.opacity = '1';
      });
    });

    /* ---- max visible ---- */
    var toasts = container.querySelectorAll('[data-sonner-toast]');
    if (toasts.length > MAX_VISIBLE) dismiss(toasts[0]);

    /* ---- auto dismiss ---- */
    if (duration > 0) {
      el._timer = setTimeout(function () { dismiss(el); }, duration);
    }

    return el;
  }

  function dismiss(el) {
    if (!el || !el.parentNode) return;
    if (el._timer) clearTimeout(el._timer);
    el.style.transform = 'translateY(100%)';
    el.style.opacity = '0';
    setTimeout(function () {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, 400);
  }

  function escapeHtml(str) {
    var d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  /* ---- public API ---- */
  function toast(message, opts) {
    return createToast(message, opts);
  }
  toast.success = function (msg, opts) { return createToast(msg, assign(opts, 'success')); };
  toast.error   = function (msg, opts) { return createToast(msg, assign(opts, 'error')); };
  toast.info    = function (msg, opts) { return createToast(msg, assign(opts, 'info')); };
  toast.warning = function (msg, opts) { return createToast(msg, assign(opts, 'warning')); };
  toast.dismiss = dismiss;

  function assign(opts, type) {
    var o = {};
    if (opts) { for (var k in opts) o[k] = opts[k]; }
    o.type = type;
    return o;
  }

  Object.defineProperty(toast, 'position', {
    get: function () { return position; },
    set: function (v) {
      position = v;
      if (container && container.parentNode) {
        container.parentNode.removeChild(container);
        container = null;
      }
    },
  });

  window.toast = toast;

  /* ---- shadcn AlertDialog ---- */
  function alertDialog(opts, onConfirm) {
    var title = opts.title || '';
    var description = opts.description || '';
    var cancelLabel = opts.cancelLabel || 'キャンセル';
    var actionLabel = opts.actionLabel || '続ける';
    var destructive = opts.destructive || false;

    /* backdrop */
    var overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;z-index:999999998;background:rgba(0,0,0,0.8);opacity:0;transition:opacity .15s ease;';

    /* dialog */
    var dialog = document.createElement('div');
    dialog.style.cssText = [
      'position:fixed',
      'left:50%',
      'top:50%',
      'z-index:999999999',
      'display:flex',
      'flex-direction:column',
      'gap:0',
      'width:100%',
      'max-width:512px',
      'border-radius:12px',
      'background:var(--color-card,#fff)',
      'border:1px solid var(--color-border,hsl(0,0%,93%))',
      'box-shadow:0 16px 70px rgba(0,0,0,.2)',
      'padding:24px',
      'box-sizing:border-box',
      'font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
      'transform:translate(-50%,-50%) scale(.95)',
      'opacity:0',
      'transition:all .15s ease',
    ].join(';');

    /* header */
    var header = '<div style="display:flex;flex-direction:column;gap:8px;">' +
      '<div style="font-size:18px;font-weight:600;line-height:1;letter-spacing:-0.01em;color:var(--color-foreground,hsl(0,0%,9%));">' + escapeHtml(title) + '</div>' +
      (description ? '<div style="font-size:14px;line-height:1.5;color:var(--color-muted-foreground,hsl(0,0%,45%));">' + escapeHtml(description) + '</div>' : '') +
      '</div>';

    /* footer */
    var btnBase = 'display:inline-flex;align-items:center;justify-content:center;height:36px;padding:0 16px;border-radius:6px;font-size:14px;font-weight:500;cursor:pointer;transition:opacity .2s;outline:none;';
    var cancelBtn = '<button data-cancel style="' + btnBase + 'background:transparent;border:1px solid var(--color-border,hsl(0,0%,90%));color:var(--color-foreground,hsl(0,0%,9%));">'+escapeHtml(cancelLabel)+'</button>';
    var actionColor = destructive
      ? 'background:hsl(0,72%,51%);border:none;color:#fff;'
      : 'background:var(--color-foreground,hsl(0,0%,9%));border:none;color:var(--color-card,#fff);';
    var actionBtn = '<button data-action style="' + btnBase + actionColor + '">'+escapeHtml(actionLabel)+'</button>';
    var footer = '<div style="display:flex;justify-content:flex-end;gap:8px;margin-top:24px;">' + cancelBtn + actionBtn + '</div>';

    dialog.innerHTML = header + footer;
    document.body.appendChild(overlay);
    document.body.appendChild(dialog);

    /* animate in */
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        overlay.style.opacity = '1';
        dialog.style.transform = 'translate(-50%,-50%) scale(1)';
        dialog.style.opacity = '1';
      });
    });

    function close() {
      overlay.style.opacity = '0';
      dialog.style.transform = 'translate(-50%,-50%) scale(.95)';
      dialog.style.opacity = '0';
      setTimeout(function () {
        if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
        if (dialog.parentNode) dialog.parentNode.removeChild(dialog);
      }, 150);
    }

    overlay.addEventListener('click', close);
    dialog.querySelector('[data-cancel]').addEventListener('click', close);
    dialog.querySelector('[data-action]').addEventListener('click', function () {
      close();
      if (onConfirm) onConfirm();
    });
  }
  window.alertDialog = alertDialog;

  /* ---- resetChat: AI assist header refresh button ---- */
  window.resetChat = function (btn) {
    alertDialog({
      title: '会話をリセットしますか？',
      description: 'これまでの会話履歴がすべて削除されます。この操作は取り消せません。',
      cancelLabel: 'キャンセル',
      actionLabel: 'リセット',
      destructive: true,
    }, function () {
      var node = btn.parentElement;
      var stream = null;
      while (node && !stream) {
        stream = node.querySelector('#stream, #chatStream, #aiStream, .stream, .booth-body, .ai-ex-stream');
        if (!stream) node = node.parentElement;
      }
      if (stream) stream.innerHTML = '';
      toast.success('会話をリセットしました');
    });
  };
})();
