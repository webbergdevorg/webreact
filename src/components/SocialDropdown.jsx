import React, { useEffect } from "react";

export default function SocialDropdown({ dropdownData, onClose }) {
  useEffect(() => {
    if (!dropdownData) return;

    const timer = setTimeout(() => {
      onClose();
    }, 2500);

    return () => clearTimeout(timer);
  }, [dropdownData, onClose]);

  if (!dropdownData) return null;

  const { targetEl, label } = dropdownData;

  let style = {};
  if (targetEl) {
    const rect = targetEl.getBoundingClientRect();
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;

    style = {
      top: `${rect.bottom + scrollY + 8}px`,
      left: `${rect.left + scrollX + rect.width / 2}px`,
      transform: "translateX(-50%) translateY(0)",
    };
  }

  return (
    <div
      className="social-dropdown is-active"
      style={style}
      aria-hidden="false"
    >
      <span className="social-dropdown__dot"></span>
      <span className="social-dropdown__text">
        {label ? `${label} — Coming Soon` : "Coming Soon"}
      </span>
    </div>
  );
}
