import { useEffect } from "react";
import { TheToad } from "../components/TheToad";
import { EducateButton } from "../components/buttons/EducateButton";
import { FeedButton } from "../components/buttons/FeedButton";
import { CreateToadForm } from "../components/CreateToadForm";
import { useToadContext } from "../hooks/useToadContext";
import { useDeleteToad, useGetToad } from "../hooks/useToad";

export const ToadGame = () => {
  const { toad } = useToadContext();
  const { getToad, error, loading } = useGetToad();
  const {
    deleteToad,
    error: deleteError,
    loading: deleteLoading,
  } = useDeleteToad();

  useEffect(() => {
    fetchToad();
  }, []);
  const fetchToad = () => getToad();

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div>
          {!toad ? (
            <CreateToadForm />
          ) : (
            <div>
              <TheToad />
              <div>
                <FeedButton />
                <EducateButton />
              </div>
              <button disabled={deleteLoading} onClick={deleteToad}>
                Delete
              </button>
              {deleteError && <div className="error">{deleteError}</div>}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
