export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h3 className="text-3xl font-bold text-center mb-12 text-yellow-400">Projects</h3>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition transform">
          <h4 className="font-bold text-lg mb-2">WordPress on AWS (LAMP Stack)</h4>
          <p className="text-sm text-gray-400">
            Deployed WordPress on AWS using EC2, RDS, and security best practices.
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition transform">
          <h4 className="font-bold text-lg mb-2">DeFi User Analytics</h4>
          <p className="text-sm text-gray-400">
            On-chain analysis comparing user behavior across Solana & Ethereum.
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition transform">
          <h4 className="font-bold text-lg mb-2">AI Diagnostic Tool</h4>
          <p className="text-sm text-gray-400">
            Early-stage AI tool to improve healthcare accessibility in Africa.
          </p>
        </div>
      </div>
    </section>
  );
}

