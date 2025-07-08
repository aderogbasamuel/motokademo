function Errorpage() {
    return (
        <>
            <div className="flex h-screen items-center justify-center bg-gray-100">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-gray-800">404</h1>
                    <p className="mt-4 text-lg text-gray-600">Page Not Found</p>
                    <a href="/" className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Go to Home
                    </a>
                </div>
            </div>
    </> );
}

export default Errorpage;