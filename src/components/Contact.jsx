export default function Contact() {
  return (
    <section id="contact" className="py-20 text-center">
      <h3 className="text-3xl font-bold mb-6 text-yellow-400">Get In Touch</h3>
      <p className="text-gray-300 mb-6 text-lg">
        Let’s connect! 🚀
      </p>
      <div className="flex justify-center space-x-8">
        <a href="mailto:your-email@example.com" className="hover:text-yellow-400">Email</a>
        <a href="https://github.com/gabriel-ejiro" className="hover:text-yellow-400">GitHub</a>
        <a href="https://linkedin.com/in/gabriel-ejiro" className="hover:text-yellow-400">LinkedIn</a>
        <a href="https://twitter.com/404kloud" className="hover:text-yellow-400">Twitter</a>
      </div>
    </section>
  );
}

