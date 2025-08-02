import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CodeSnippets = () => {
  const [currentSnippet, setCurrentSnippet] = useState(0);
  
  const snippets = [
    "const ML & Data Engineer = { skills: ['Machine Learning 📊', 'Tensorflow 🤖', 'Java'] };",
    "function solve(problem) { return MLModel.train(data).predict(problem); }",
    "const insight = data => models.reduce((acc, algo) => acc + algo.learn(data), 0);",
    "while(learning) { skills++; opportunities.push(new Success()); }",
    "const magic = await Promise.resolve(hardWork + dedication);",
    "// fueledBy.includes('curiosity 💡') && brain.playing('deep focus 🎧');",
    "try { deploy(model); } catch (error) { debug('hyperparameters 🔧'); }",
    "setInterval(() => console.log('Still coding... 💻'), 10000);",
    "if (bug.exists()) { fix(); coffee.refill(); tryAgain(); }",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSnippet((prev) => (prev + 1) % snippets.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-20 lg:right-10 hidden lg:block">
      <motion.div
        key={currentSnippet}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        className="bg-surface-dark/20 backdrop-blur-sm border border-primary/30 rounded-lg p-4 font-mono text-sm"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <span className="text-accent">{snippets[currentSnippet]}</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CodeSnippets;