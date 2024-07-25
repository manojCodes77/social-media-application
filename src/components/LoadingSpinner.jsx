const LoadingSpinner = () => {
    return (
        <div className="loading-spinner my-3">
            <div className="spinner-border text-white fw-bold" role="status" style={{ width: '5rem', height: '5rem' }}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};
export default LoadingSpinner;