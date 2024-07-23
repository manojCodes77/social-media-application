const WelcomeMessage = ({onGetPostsClick}) => {
    return (
        <>
        <h1 className="text-white text-lg my-4">Currently their are No Posts!</h1>
        <button onClick={onGetPostsClick}
        className="bg-blue-700 text-white px-2 py-2 rounded-lg hover:bg-blue-600 transition-all duration-200">Get Post From Server</button>
        </>
    )
};
export default WelcomeMessage;