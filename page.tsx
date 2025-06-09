"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import React from "react";
import CombinedAnimation from "../components/CombinedAnimation";

export default function Home() {
  const [time, setTime] = React.useState(new Date());
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    setLoading(false);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours() % 12 || 12;
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");
  const ampm = time.getHours() >= 12 ? "PM" : "AM";
  const day = time.toLocaleDateString("en-US", { weekday: "long" });
  const month = time.toLocaleDateString("en-US", { month: "long" });
  const date = time.getDate();

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-cyan-400 text-2xl animate-pulse">Loading JARVIS...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-cyan overflow-hidden flex flex-col">
      {/* Top Bar */}
      <header className="border-b border-cyan/20 p-6 flex justify-between items-center">
        <div className="flex gap-8 text-xs uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-cyan rounded-full animate-pulse"></div>
            <span className="font-bold">RAM USAGE 50%</span>
          </div>
          <div className="flex gap-4">
            {["SHUTDOWN", "RESTART", "LOG OFF"].map((action) => (
              <Button 
                key={action}
                variant="ghost" 
                className="text-cyan hover:text-black hover:bg-cyan transition-all duration-200 px-6"
              >
                {action}
              </Button>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="text-2xl font-bold tracking-wider animate-glow">
            {`${hours}:${minutes}:${seconds} ${ampm}`}
          </div>
          <div className="text-xs opacity-80">{`${day}, ${month} ${date}, 2023`}</div>
        </div>

        <div className="flex gap-3">
          {["Photoshop", "IMG Tool", "COLL EDITOR", "Tool Kit", "Audition", "MediaEncoder"].map(
            (tool) => (
              <Button
                key={tool}
                variant="outline"
                className="text-xs px-4 py-2 border-cyan/20 hover:bg-cyan hover:text-black hover:border-cyan transition-all duration-300 hover:scale-105 tracking-wider"
              >
                {tool}
              </Button>
            )
          )}
        </div>
      </header>

      <main className="flex-1 flex gap-6 p-6">
        {/* Left Sidebar */}
        <aside className="w-48 flex flex-col gap-4">
          <Card className="bg-black border-cyan/20 p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-600 rounded flex items-center justify-center text-2xl font-bold text-black animate-glow">
                J
              </div>
              <div>
                <div className="font-bold tracking-wide">Ironman JARVIS</div>
                <div className="text-[10px] text-cyan/60">S.H.I.L.D. OS</div>
                <div className="text-[8px] text-cyan/40">Created By Yash1331</div>
              </div>
            </div>
          </Card>

          <nav className="flex flex-col gap-2">
            {["Chrome", "Control Panel", "VLC Player", "Mozilla Firefox", "uTorrent", "Skype"].map(
              (app) => (
                <Button
                  key={app}
                  variant="ghost"
                  className="justify-start text-left hover:bg-cyan hover:text-black transition-colors"
                >
                  {app}
                </Button>
              )
            )}
          </nav>
        </aside>

        {/* Center Section */}
        <section className="flex-1 flex flex-col items-center justify-center relative">
          {/* Ironman Outline */}
          <svg
            viewBox="0 0 300 400"
            className="w-[32rem] stroke-cyan stroke-2 fill-none animate-glow"
          >
            {/* Head */}
            <path d="M150 50 L180 80 L180 120 L150 150 L120 120 L120 80 Z" />
            {/* Eyes */}
            <path d="M135 100 L145 100 M155 100 L165 100" className="animate-pulse" />
            {/* Face Plate */}
            <path d="M150 90 L160 100 L160 110 L150 120 L140 110 L140 100 Z" />
            {/* Neck */}
            <path d="M140 150 L160 150 L165 170 L135 170 Z" />
            {/* Shoulders */}
            <path d="M135 170 L100 190 M165 170 L200 190" />
            {/* Chest */}
            <path d="M135 170 L165 170 L180 220 L150 240 L120 220 Z" />
            {/* Arc Reactor */}
            <circle
              cx="150"
              cy="200"
              r="20"
              className="animate-pulse"
            />
            <circle cx="150" cy="200" r="15" className="animate-glow" />
            <circle cx="150" cy="200" r="10" className="animate-spin-slow" />
          </svg>

          {/* Arc Reactor Display */}
          <div className="absolute bottom-24 flex flex-col items-center gap-8">
            <div className="relative">
              {/* Outer Ring */}
              <div className="w-48 h-48 rounded-full border-8 border-cyan/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow"></div>
              
              {/* Middle Ring with Core */}
              <div className="w-40 h-40 rounded-full border-4 border-cyan flex items-center justify-center bg-black/50 animate-glow relative">
                {/* Concentric Rings */}
                <div className="absolute inset-0 rounded-full border-4 border-cyan/20 animate-spin-slow"></div>
                <div className="absolute inset-2 rounded-full border-2 border-cyan/40 animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
                <div className="absolute inset-4 rounded-full border border-cyan/60 animate-spin-slow"></div>
                
                {/* Core Glow */}
                <div className="absolute inset-8 rounded-full bg-cyan/5 animate-reactor"></div>
                <div className="absolute inset-10 rounded-full bg-cyan/10 animate-pulse"></div>
                
                {/* Inner Content */}
                <div className="relative flex flex-col items-center gap-2 z-10">
                  <div className="text-2xl tracking-[0.2em] font-bold animate-flicker">{`${hours}:${minutes}`}</div>
                  <div className="text-xs tracking-widest opacity-80 animate-pulse">{seconds}</div>
                </div>

                {/* Diagonal Lines */}
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 animate-pulse"
                    style={{
                      border: '1px solid rgba(0, 255, 255, 0.1)',
                      transform: `rotate(${i * 45}deg)`,
                    }}
                  ></div>
                ))}
              </div>

              {/* Energy Beams */}
              <div className="absolute inset-0 flex items-center justify-center">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 bg-cyan/30 animate-energy"
                    style={{
                      height: '120%',
                      transform: `rotate(${i * 45}deg)`,
                      transformOrigin: 'center',
                    }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Status Display */}
            <div className="text-sm text-center max-w-md flex flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="flex flex-col items-center animate-reactor">
                  <span className="font-bold text-lg animate-pulse">100%</span>
                  <span className="text-xs text-cyan/60">Power</span>
                </div>
                <div className="h-8 w-px bg-cyan/20"></div>
                <div className="flex flex-col items-center">
                  <span className="font-bold text-lg animate-flicker">28°C</span>
                  <span className="text-xs text-cyan/60">Temp</span>
                </div>
                <div className="h-8 w-px bg-cyan/20"></div>
                <div className="flex flex-col items-center">
                  <span className="font-bold text-lg animate-glow">Optimal</span>
                  <span className="text-xs text-cyan/60">Status</span>
                </div>
              </div>
              
              {/* Chat Interface */}
              <div className="w-full bg-black/30 border border-cyan/20 rounded-lg p-4 relative overflow-hidden group">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan/5 to-transparent animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-cyan/5 via-transparent to-cyan/5 animate-pulse" style={{ animationDelay: '1s' }}></div>
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan/40"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan/40"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan/40"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan/40"></div>
                
                <div className="relative">
                  {/* Header */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-cyan rounded-full animate-pulse"></div>
                    <span className="text-xs tracking-wider animate-flicker font-bold">JARVIS INTERFACE</span>
                    <div className="flex-1 h-px bg-cyan/20"></div>
                    <span className="text-[10px] text-cyan/60 animate-pulse">ONLINE</span>
                  </div>
                  
                  {/* Status Messages */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-xs text-cyan/60 animate-flicker">
                      <span className="w-1 h-1 bg-cyan rounded-full"></span>
                      System ready for voice commands
                    </div>
                    <div className="flex items-center gap-2 text-xs text-cyan/60 animate-flicker" style={{ animationDelay: '0.5s' }}>
                      <span className="w-1 h-1 bg-cyan rounded-full"></span>
                      All subsystems operational
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      className="flex-1 text-xs border-cyan/20 hover:bg-cyan hover:text-black transition-all duration-300 group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-cyan/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                      <span className="relative flex items-center justify-center gap-2">
                        <span className="animate-pulse text-lg">●</span>
                        Voice Command
                      </span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 text-xs border-cyan/20 hover:bg-cyan hover:text-black transition-all duration-300 group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-cyan/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                      <span className="relative flex items-center justify-center gap-2">
                        <span className="animate-flicker">⌨</span>
                        Text Input
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Right Menu */}
        <aside className="w-64 flex flex-col items-center gap-6">
          <div className="relative w-56 h-56">
            <div className="absolute inset-0 rounded-full border-4 border-cyan/20 animate-spin-slow"></div>
            <div className="absolute inset-4 rounded-full border-2 border-cyan/30"></div>
            <div className="absolute inset-8 rounded-full border border-cyan/40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-xl font-bold animate-glow tracking-widest">System</div>
            </div>
            {["Google", "Gmail", "Facebook", "YouTube", "IMDB", "KAT"].map((item, index) => {
              const angle = (index * 60 * Math.PI) / 180;
              const radius = 90; // Increased radius for better spacing
              const x = 50 + Math.cos(angle) * radius;
              const y = 50 + Math.sin(angle) * radius;
              return (
                <Button
                  key={item}
                  variant="ghost"
                  className="absolute w-14 h-14 rounded-full hover:bg-cyan hover:text-black transition-all duration-300 hover:scale-110 hover:animate-glow text-sm font-bold tracking-wider"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {item}
                </Button>
              );
            })}
          </div>

          <Card className="bg-black/50 border-cyan/20 p-4 w-full">
            <div className="text-xs space-y-2">
              {[
                "WEB",
                "9GAG",
                "Pirate Bay",
                "Stumble Upon",
                "Yahoo",
                "Pupil Pod",
                "Wikipedia",
              ].map((item) => (
                <div
                  key={item}
                  className="hover:text-black hover:bg-cyan px-3 py-1.5 rounded cursor-pointer transition-all duration-200 hover:scale-105 tracking-wider font-medium"
                >
                  {item}
                </div>
              ))}
            </div>
          </Card>
        </aside>
      </main>

      {/* Bottom Bar */}
      <footer className="border-t border-cyan/20 p-6">
