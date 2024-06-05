interface OverlayProps {
  overlayBtn: boolean;
  setOverlayBtn: (toggle: boolean) => void;
}

const Overlay: React.FC<OverlayProps> = ({ overlayBtn, setOverlayBtn }) => (
  <div
    className="ltn__utilize-overlay"
    style={{
      display: overlayBtn ? "block" : "none",
      opacity: overlayBtn ? "1" : "0",
    }}
    onClick={() => setOverlayBtn(false)}
  ></div>
);

export default Overlay;
