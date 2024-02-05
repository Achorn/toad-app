import { useDeleteToad } from "../../hooks/useToad";

export const DeleteToad = () => {
  const {
    deleteToad,
    error: deleteError,
    loading: deleteLoading,
  } = useDeleteToad();

  return (
    <div>
      <button disabled={deleteLoading} onClick={deleteToad}>
        Delete
      </button>
      {deleteError && <div className="error">{deleteError}</div>}
    </div>
  );
};
