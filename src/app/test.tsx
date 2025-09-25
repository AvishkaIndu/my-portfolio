// Temporary test component to check Tailwind styling
export default function TestPage() {
  return (
    <div className="min-h-screen bg-cyber-dark text-white flex items-center justify-center">
      <div className="space-y-8 text-center">
        <h1 className="text-4xl font-bold text-cyber-green glow-text">
          Tailwind Test
        </h1>
        <div className="flex space-x-4">
          <div className="w-20 h-20 bg-cyber-green"></div>
          <div className="w-20 h-20 bg-cyber-blue"></div>
          <div className="w-20 h-20 bg-cyber-purple"></div>
        </div>
        <button className="cyber-button px-6 py-3 rounded-lg">
          Test Button
        </button>
        <div className="cyber-card p-6 rounded-lg max-w-md">
          <p>This is a test card to check if styling is working properly.</p>
        </div>
      </div>
    </div>
  )
}