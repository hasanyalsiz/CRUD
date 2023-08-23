const DeleteModal = (props) => {
  return (
    <div className="delete-modal">
      <div className="modal-inner">
        <h5>Silmek İstiyor musunuz?</h5>
        <button
          onClick={() => props.setShowDelete(false)}
          className="btn btn-secondary"
        >
          Vazgeç
        </button>
        <button
          onClick={() => props.handleDelete()}
          className="btn btn-danger"
        >
          Onayla
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
