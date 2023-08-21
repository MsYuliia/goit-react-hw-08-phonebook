import { ThreeDots } from 'react-loader-spinner';
import css from './DeleteBtn.module.css';
import PropTypes from 'prop-types';

export const DeleteBtn = ({ id, isLoading, onDelete }) => {
  return (
    <button
      className={css.contactButton}
      type="button"
      disabled={isLoading}
      onClick={() => {
        onDelete(id);
      }}
    >
      {isLoading ? (
        <ThreeDots
          height="14"
          width="40"
          radius="9"
          color="#e56363"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      ) : (
        'Delete'
      )}
    </button>
  );
};

DeleteBtn.propTypes = {
  id: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
};
