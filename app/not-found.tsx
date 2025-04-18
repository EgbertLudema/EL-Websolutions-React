'use client'

import Link from 'next/link';
import type { Metadata } from 'next';
import { useEffect, useState } from 'react';

export const metadata: Metadata = {
    title: '404 - Niet gevonden - EL-Websolutions',
    description: 'Benieuwd naar wat ik allemaal al heb opgeleverd? Bekijk hier mijn projecten.',
};

const size = 4;

const tileColors: Record<number, string> = {
    0: 'bg-slate-100',
    2: 'bg-yellow-100 text-yellow-900',
    4: 'bg-yellow-200 text-yellow-900',
    8: 'bg-orange-300 text-white',
    16: 'bg-orange-400 text-white',
    32: 'bg-orange-500 text-white',
    64: 'bg-orange-600 text-white',
    128: 'bg-red-400 text-white',
    256: 'bg-red-500 text-white',
    512: 'bg-red-600 text-white',
    1024: 'bg-purple-500 text-white',
    2048: 'bg-green-600 text-white',
};

const createEmptyGrid = () => {
    return Array.from({ length: size }, () => Array(size).fill(0));
};

const getRandomEmptyCell = (grid: number[][]) => {
    const empty = [];
    for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
            if (grid[r][c] === 0) empty.push({ r, c });
        }
    }
    return empty.length ? empty[Math.floor(Math.random() * empty.length)] : null;
};

const addRandomTile = (grid: number[][]) => {
    const cell = getRandomEmptyCell(grid);
    if (cell) grid[cell.r][cell.c] = Math.random() < 0.9 ? 2 : 4;
    return grid;
};

const slide = (row: number[]) => {
    const filtered = row.filter((n) => n !== 0);
    const merged: number[] = [];
    let score = 0;

    for (let i = 0; i < filtered.length; i++) {
        if (filtered[i] === filtered[i + 1]) {
            const val = filtered[i] * 2;
            merged.push(val);
            score += val;
            i++;
        } else {
            merged.push(filtered[i]);
        }
    }
    while (merged.length < size) merged.push(0);
    return { newRow: merged, score };
};

export default function NotFound() {
    const [grid, setGrid] = useState<number[][] | null>(null);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [scoreHistory, setScoreHistory] = useState<number[]>([]);

    const checkGameOver = (grid: number[][]) => {
        for (let r = 0; r < size; r++) {
            for (let c = 0; c < size; c++) {
                const current = grid[r][c];
                if (current === 0) return false;
                if (c < size - 1 && current === grid[r][c + 1]) return false;
                if (r < size - 1 && current === grid[r + 1][c]) return false;
            }
        }
        return true;
    };

    const handleMove = (dir: 'left' | 'right' | 'up' | 'down') => {
        if (!grid || gameOver) return;

        let newGrid = grid.map((row) => [...row]);
        let moved = false;
        let points = 0;

        const rotate = (grid: number[][]) => grid[0].map((_, i) => grid.map((r) => r[i]));
        const flip = (grid: number[][]) => grid.map((row) => [...row].reverse());

        if (dir === 'up') newGrid = rotate(newGrid);
        else if (dir === 'down') newGrid = flip(rotate(newGrid));
        else if (dir === 'right') newGrid = flip(newGrid);

        newGrid = newGrid.map((row) => {
            const { newRow, score } = slide(row);
            points += score;
            if (JSON.stringify(row) !== JSON.stringify(newRow)) moved = true;
            return newRow;
        });

        if (dir === 'up') newGrid = rotate(rotate(rotate(newGrid)));
        else if (dir === 'down') newGrid = rotate(flip(newGrid));
        else if (dir === 'right') newGrid = flip(newGrid);

        if (moved) {
            const newScore = score + points;
            setScore(newScore);
            setGrid(addRandomTile(newGrid));

            if (newScore > highScore) {
                setHighScore(newScore);
                localStorage.setItem('2048-highscore', newScore.toString());
            }

            if (checkGameOver(newGrid)) {
                setGameOver(true);
                const updatedHistory = [newScore, ...scoreHistory];
                setScoreHistory(updatedHistory);
                localStorage.setItem('2048-score-history', JSON.stringify(updatedHistory));
            }
        }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
            e.preventDefault();
        }
    
        if (e.key === 'ArrowLeft') handleMove('left');
        if (e.key === 'ArrowRight') handleMove('right');
        if (e.key === 'ArrowUp') handleMove('up');
        if (e.key === 'ArrowDown') handleMove('down');
    };    

    useEffect(() => {
        let startX = 0;
        let startY = 0;
        let endX = 0;
        let endY = 0;
    
        const handleTouchStart = (e: TouchEvent) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        };
    
        const handleTouchMove = (e: TouchEvent) => {
            endX = e.touches[0].clientX;
            endY = e.touches[0].clientY;
        };
    
        const handleTouchEnd = () => {
            const deltaX = endX - startX;
            const deltaY = endY - startY;
    
            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                if (deltaX > 30) handleMove('right');
                else if (deltaX < -30) handleMove('left');
            } else {
                if (deltaY > 30) handleMove('down');
                else if (deltaY < -30) handleMove('up');
            }
        };
    
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', handleTouchEnd);
    
        return () => {
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [grid, gameOver]);
    

    useEffect(() => {
        const newGrid = addRandomTile(addRandomTile(createEmptyGrid()));
        setGrid(newGrid);

        const savedHighScore = localStorage.getItem('2048-highscore');
        if (savedHighScore) setHighScore(Number(savedHighScore));

        const savedHistory = localStorage.getItem('2048-score-history');
        if (savedHistory) setScoreHistory(JSON.parse(savedHistory));
    }, []);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    });

    const resetGame = () => {
        const newGrid = addRandomTile(addRandomTile(createEmptyGrid()));
        setGrid(newGrid);
        setScore(0);
        setGameOver(false);
    };

    if (!grid) return null;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 gap-4">
            <h1 className="text-4xl font-bold">404 – Pagina niet gevonden</h1>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
                Omdat je niet gevonden hebt wat je zocht, kun je je frustratie kwijt in een potje 2048!
            </p>

            <div className="flex flex-col items-center gap-1">
                <div className="text-xl font-semibold">Score: {score}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Highscore: {highScore}</div>
                {gameOver && (
                    <div className="text-red-600 font-semibold text-lg">Game Over! 😢</div>
                )}
            </div>

            <div className="grid grid-cols-4 gap-2 bg-slate-200 p-2 sm:p-4 rounded shadow-md">
                {grid.flat().map((num, i) => (
                    <div
                        key={i}
                        className={`
                            w-14 h-14 sm:w-16 sm:h-16
                            flex items-center justify-center rounded text-sm sm:text-xl font-bold transition
                            ${tileColors[num] || 'bg-black text-white'}
                        `}
                    >
                        {num !== 0 ? num : ''}
                    </div>
                ))}
            </div>


            <button
                onClick={resetGame}
                className="gradient-btn px-4 py-2 transition"
            >
                Nieuw spel
            </button>

            <div className="mt-6 w-full max-w-sm text-left">
                <h2 className="text-lg font-semibold mb-2">Gespeelde potjes:</h2>
                {scoreHistory.length === 0 ? (
                    <p className="text-slate-500">Nog geen gespeelde potjes.</p>
                ) : (
                    <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                        {scoreHistory.map((s, i) => (
                            <li key={i}>Potje {scoreHistory.length - i}: {s} punten</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
