function SubscriptionSection() {
  return (
    <section className="bg-white/10 rounded-lg p-4 space-y-5">
      <div className="space-y-1">
        <h3 className="text-xl md:text-3xl font-bold font-display">
          The <span className="text-beast-purple-light">Trendy Nation</span> Newsletter{" "}
        </h3>
        <p>Sign up for game-changing insights</p>
      </div>
      <button className="px-3 py-2 hover:bg-beast-purple-light hover:text-white transition-all ease-in-out duration-300 border-2 border-beast-purple-light rounded-lg font-medium">
        Subscribe
      </button>
    </section>
  );
}

export default SubscriptionSection;
