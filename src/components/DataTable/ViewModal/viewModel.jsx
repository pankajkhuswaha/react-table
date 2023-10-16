/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Badge, Modal } from "react-bootstrap";

const ViewModal = (props) => {
  const { show, onHide, data, keysToHide } = props;
  const elementStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #8080803b",
    paddingBottom: "7px",
    marginBottom: "4px",
  };

  const transformData = (data) => {
    if (!data) return null;

    const transformedData = {};

    const transformValue = (value) => {
      if (Array.isArray(value)) {
        return value.map((item, index) => (
          <div key={index}>{transformValue(item)}</div>
        ));
      } else if (typeof value === "object" && value !== null) {
        const newobj = (
          <div className="d-flex flex-col">
            {Object.entries(transformData(value)).map(([key, value]) => (
              <div key={key} style={elementStyle}>
                <strong className="text-capitalize text-primary">
                  {key} :
                </strong>{" "}
                {value}
              </div>
            ))}
          </div>
        );
        return "This value ia an object Please wait we are still working on it";
      } else {
        if (typeof value === "string" && value.includes("https")) {
          return (
            <Badge bg="info">
              <a href={value} target="_blank" rel="noopener noreferrer">
                View
              </a>
            </Badge>
          );
        } else {
          return value;
        }
      }
    };

    for (const [key, value] of Object.entries(data)) {
      const transformedKey = key.replace(/([a-z])([A-Z])/g, "$1 $2");
      const excludedKeys = keysToHide;

      if (!excludedKeys?.includes(key)) {
        if (typeof value === "string" && value?.includes("https")) {
          transformedData[transformedKey] = (
            <Badge bg="info">
              <a href={value} target="_blank" rel="noopener noreferrer">
                View
              </a>
            </Badge>
          );
        } else if (typeof value === "boolean") {
          transformedData[transformedKey] = (
            <Badge bg={value ? "success" : "danger"}>
              {value ? "Yes" : "No"}
            </Badge>
          );
        } else if (
          typeof value === "string" &&
          /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(value)
        ) {
          transformedData[transformedKey] = new Date(value).toLocaleString();
        } else {
          transformedData[transformedKey] = transformValue(value);
        }
      }
    }

    return transformedData;
  };

  const transformedData = transformData(data);

  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title>View Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {data && (
          <div>
            {Object.entries(transformedData).map(([key, value]) => (
              <div key={key} style={elementStyle}>
                <strong className="text-capitalize text-nowrap text-primary">
                  {key} :
                </strong>{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <p className="mb-0 d-flex gap-2">{value}</p>
              </div>
            ))}
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <button onClick={onHide} className="btn btn-outline-danger">
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ViewModal;
