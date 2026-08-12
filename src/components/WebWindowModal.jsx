import React, { useState, useEffect } from "react";

export default function WebWindowModal({ activeProject, onClose }) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  useEffect(() => {
    if (activeProject) {
      setIsMinimized(false);
      setIsMaximized(false);
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [activeProject]);

  if (!activeProject) return null;

  const handleMinimize = () => {
    setIsMinimized(true);
    document.body.classList.remove("modal-open");
  };

  const handleRestore = () => {
    setIsMinimized(false);
    document.body.classList.add("modal-open");
  };

  const handleToggleMaximize = () => {
    setIsMaximized((prev) => !prev);
  };

  const handleOpenNewTab = () => {
    if (activeProject.url) {
      window.open(activeProject.url, "_blank", "noopener,noreferrer");
    }
  };

  const handleClose = () => {
    document.body.classList.remove("modal-open");
    onClose();
  };

  const isDummyUrl = !activeProject.url || activeProject.url === "#" || activeProject.url === "about:blank";

  return (
    <div
      className={`web-window-modal is-active ${
        isMinimized ? "is-minimized" : ""
      }`}
      id="web-window-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="win-title"
    >
      <div
        className="web-window-overlay"
        id="web-window-overlay"
        onClick={handleClose}
      ></div>

      <div
        className={`web-window ${isMaximized ? "is-maximized" : ""}`}
        id="web-window"
      >
        {/* Header */}
        <div className="web-window__header">
          <div className="web-window__branding">
            <span className="web-window__title" id="win-title">
              {activeProject.title || "MOTO FOCUZ — Detail Garage"}
            </span>
          </div>

          {/* Address Bar */}
          <div className="web-window__url-bar">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lock-icon"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <span className="web-window__url-text" id="win-url-text">
              {isDummyUrl ? "https://webberg.in/preview/coming-soon" : activeProject.url}
            </span>
          </div>

          {/* Actions */}
          <div className="web-window__actions">
            {!isDummyUrl && (
              <button
                type="button"
                className="win-action-btn win-action-btn--launch"
                id="win-launch-btn"
                title="Open in New Tab"
                onClick={handleOpenNewTab}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                <span className="btn-lbl">Open in New Tab</span>
              </button>
            )}

            <button
              type="button"
              className="win-action-btn win-action-btn--min"
              id="win-minimize-btn"
              title="Minimize"
              aria-label="Minimize preview"
              onClick={handleMinimize}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>

            <button
              type="button"
              className="win-action-btn win-action-btn--max"
              id="win-maximize-btn"
              title="Maximize / Restore"
              aria-label="Maximize preview"
              onClick={handleToggleMaximize}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2"></rect>
              </svg>
            </button>

            <button
              type="button"
              className="win-action-btn win-action-btn--close"
              id="win-close-btn"
              title="Close Preview Window"
              aria-label="Close modal"
              onClick={handleClose}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              <span className="close-lbl">Close</span>
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="web-window__body">
          {isDummyUrl ? (
            <div className="web-window__placeholder">
              <div className="placeholder-card">
                <button
                  type="button"
                  className="placeholder-card__close-btn"
                  aria-label="Close preview modal"
                  title="Close"
                  onClick={handleClose}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                <span className="placeholder-badge">Development Stage</span>
                <h3 className="placeholder-title">Live Preview Coming Soon</h3>
                <p className="placeholder-desc">
                  The live website for <strong>{activeProject.title}</strong> is currently under active development.
                </p>
                <div className="placeholder-actions">
                  <button
                    type="button"
                    className="btn btn--submit"
                    onClick={() => {
                      handleClose();
                      const contactSec = document.getElementById("contact");
                      if (contactSec) contactSec.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Contact Webberg Team &rarr;
                  </button>
                  <button
                    type="button"
                    className="btn btn--close-modal-mobile"
                    onClick={handleClose}
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <iframe
                id="win-iframe"
                className="web-window__iframe"
                src={activeProject.url}
                title="Website Live Preview"
              ></iframe>
              <div className="web-window__iframe-fallback">
                <span>If website content does not load inside iframe due to domain security policy:</span>
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <button type="button" onClick={handleOpenNewTab}>Open in New Tab ↗</button>
                  <button type="button" className="fallback-close-btn" onClick={handleClose}>Close ✕</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Minimized Floating Dock Pill */}
      <div
        className="web-window-dock"
        id="web-window-dock"
        title="Click to Restore Window"
        onClick={handleRestore}
      >
        <div className="dock__icon">🌐</div>
        <span className="dock__title" id="dock-title">
          {activeProject.title || "MOTO FOCUZ — Detail Garage"}
        </span>
        <button
          type="button"
          className="dock__restore-btn"
          onClick={(e) => {
            e.stopPropagation();
            handleRestore();
          }}
        >
          Restore ↗
        </button>
        <button
          type="button"
          className="dock__close-btn"
          id="dock-close-btn"
          title="Close"
          onClick={(e) => {
            e.stopPropagation();
            handleClose();
          }}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
