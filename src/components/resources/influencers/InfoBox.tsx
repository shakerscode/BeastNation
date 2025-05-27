export function InfoBox() {
    return (
      <div className="flex items-start gap-4 bg-white/10  rounded-lg p-4">
        <img
          src="/LOGO.png"
          alt="Trendy Nation Logo"
          className="w-20 h-20 rounded-full"
        />
        <div>
          <h2 className="text-lg font-medium">Trendy Nation</h2>
          <p className="text-sm text-white/90">
            Trendy Nation is a leading global social media agency powering
            cultural relevance for brands with a social-first approach to
            marketing.
          </p>
        </div>
      </div>
    );
  }