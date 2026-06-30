import { useRoute } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { categories } from "@/lib/toolsDataArticle";

export default function CategoryDetail() {
  const [match, params] = useRoute("/category/:id");

  if (!match) return null;

  const category = categories.find((c) => c.id === params?.id);

  if (!category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Category Not Found</h1>
          <Link href="/">
            <a className="text-indigo-400 hover:text-indigo-300">← Back to Home</a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <a className="flex items-center gap-2 text-white hover:text-indigo-400 transition">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-lg font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                DevTools
              </span>
            </a>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-12 border-b border-zinc-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl">{category.icon}</span>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-white">{category.name}</h1>
              </div>
            </div>
            <p className="text-xl text-zinc-400 max-w-2xl">{category.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Subcategories */}
      <section className="py-16">
        <div className="container">
          {category.subcategories.map((subcategory, subIdx) => (
            <motion.div
              key={subIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: subIdx * 0.1 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              {/* Subcategory Header */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">{subcategory.name}</h2>
                <p className="text-zinc-400">{subcategory.description}</p>
              </div>

              {/* Tools Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {subcategory.tools.map((tool, toolIdx) => (
                  <motion.a
                    key={tool.id}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3, delay: toolIdx * 0.05 }}
                    viewport={{ once: true }}
                    className="group p-5 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:border-indigo-500/50 transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-white group-hover:text-indigo-400 transition">
                        {tool.name}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-indigo-400 transition opacity-0 group-hover:opacity-100" />
                    </div>
                    <p className="text-sm text-zinc-400 mb-4 line-clamp-2">{tool.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {tool.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded bg-zinc-800 text-zinc-300 group-hover:bg-indigo-500/20 group-hover:text-indigo-300 transition"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Divider */}
              {subIdx < category.subcategories.length - 1 && (
                <div className="mt-16 pt-16 border-t border-zinc-800" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 border-t border-zinc-800">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Explore More Categories</h2>
            <Link href="/">
              <a className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all">
                Back to Home
              </a>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 bg-zinc-950/50">
        <div className="container text-center text-sm text-zinc-500">
          <p>© 2026 DevTools. Curated with ❤️ for developers.</p>
        </div>
      </footer>
    </div>
  );
}
