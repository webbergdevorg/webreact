import React from "react";

export default function ServiceDetailModal({ service, onClose, onBookService }) {
  if (!service) return null;

  return (
    <div className="modal-overlay is-open" onClick={onClose}>
      <div
        className="modal-container"
        style={{ maxWidth: "560px" }}
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close"
          aria-label="Close service detail"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="modal-header">
          <h2>{service.title}</h2>
          <p>{service.desc}</p>
        </div>

        <div className="modal-body" style={{ marginTop: "20px" }}>
          {service.img && (
            <div
              style={{
                width: "100%",
                maxHeight: "220px",
                borderRadius: "14px",
                overflow: "hidden",
                marginBottom: "20px",
                background: "rgba(10,14,32,0.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={service.img}
                alt={service.title}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          )}

          <h4 style={{ color: "#0A6DFF", marginBottom: "10px", fontFamily: "Manrope, sans-serif" }}>
            Technologies &amp; Deliverables
          </h4>
          <div className="svc-card__pills" style={{ marginBottom: "24px" }}>
            {service.pills &&
              service.pills.map((pill, idx) => (
                <span key={idx} className="pill">
                  {pill}
                </span>
              ))}
          </div>
        </div>

        <div className="modal-footer">
          <button type="button" className="btn btn--secondary" onClick={onClose}>
            Close
          </button>
          <button
            type="button"
            className="btn btn--cta"
            onClick={() => {
              onClose();
              if (onBookService) onBookService(service);
            }}
          >
            Book This Service
          </button>
        </div>
      </div>
    </div>
  );
}
