"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data";

export default function Blog() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <p className="text-accent-teal text-sm font-mono uppercase tracking-widest mb-3">
            Learn
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Understand the method, not just the signal
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BLOG_POSTS.map((post, i) => (
            <motion.a
              key={post.title}
              href="#"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 3) * 0.08 }}
              className="group glass rounded-2xl p-6 hover:bg-white/[0.06] transition-colors flex flex-col"
            >
              <span className="text-xs font-mono text-accent-teal mb-4">{post.tag}</span>
              <h3 className="font-bold text-lg mb-2 leading-snug">{post.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed flex-1">{post.excerpt}</p>
              <div className="mt-5 flex items-center justify-between text-xs text-text-muted">
                <span>{post.readTime} read</span>
                <ArrowRight
                  size={16}
                  className="text-accent-teal group-hover:translate-x-1 transition-transform"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
