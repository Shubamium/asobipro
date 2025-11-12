import { BiCopy } from "react-icons/bi";
import { IoCheckmarkCircle, IoCloseCircle } from "react-icons/io5";

export function Confirm({ orderID }: { orderID?: string }) {
  return (
    <div id="confirm">
      <div className="order-status-panel">
        <div className="status-icon">
          {orderID ? <IoCheckmarkCircle /> : <IoCloseCircle />}
        </div>
        <div className="head">
          <h2 className="oh">
            {orderID
              ? "Order Submitted Succesfully"
              : "Failed to submit Order..."}
          </h2>
          {orderID && (
            <p
              className="oid btn hv"
              onClick={() => {
                navigator.clipboard.writeText(orderID);
              }}
            >
              Tracking ID: {orderID}
              <span>
                <BiCopy />
              </span>
            </p>
          )}
        </div>
        <p className="note">
          Order warning and note: Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s.
        </p>
      </div>
    </div>
  );
}
