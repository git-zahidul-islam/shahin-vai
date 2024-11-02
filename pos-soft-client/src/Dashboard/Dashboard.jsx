const Dashboard = () => {
    return (
        <section className="h-screen w-full bg-green-300/70">
            <div className="mb-20">
                <h1>This is Dashboard Home page</h1>
                <div className="grid grid-cols-2">
                    <div className="p-2 bg-lime-400">
                        <p>Total Products</p>
                        <p>1010</p>
                    </div>
                    <div className="p-2 bg-green-300">
                        <p>Total Products</p>
                        <p>1010</p>
                    </div>
                </div>
            </div>            
        </section>
    );
};

export default Dashboard;