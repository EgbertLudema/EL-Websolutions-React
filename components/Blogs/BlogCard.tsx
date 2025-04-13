"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BlogPost } from "@/lib/server/getBlogs";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";

export default function BlogCard({ blog }: { blog: BlogPost }) {
  return (
    <Link href={`/blogs/${blog.slug}`} className="group w-full h-full">
      <motion.article
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="bg-slate-100 rounded-xl shadow-md overflow-hidden hover:shadow-lg dark:bg-slate-800 transition-shadow flex flex-col h-full"
      >
        <div className="aspect-video overflow-hidden">
          <Image
            src={blog.thumbnail || "/placeholder.jpg"}
            alt={blog.title}
            width={400}
            height={225}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center justify-between mb-3 text-sm text-slate-600 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <FaCalendarAlt className="w-4 h-4" />
              {blog.date
                ? new Date(blog.date).toLocaleDateString("nl-NL", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })
                : "In progress"}
            </span>
            <span className="flex items-center gap-1">
              <FaRegUser className="w-4 h-4" />
              {blog.author || "Unknown"}
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {blog.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-4 flex-grow">
            {blog.description}
          </p>

          {blog.tags && blog.tags.length > 0 && (
            <motion.div layout className="flex flex-wrap gap-2 mt-auto">
              {blog.tags.map((tag) => (
                <span key={tag} className="tag-blog">
                  {tag}
                </span>
              ))}
            </motion.div>
          )}
        </div>
      </motion.article>
    </Link>
  );
}