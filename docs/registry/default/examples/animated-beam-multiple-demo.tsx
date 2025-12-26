import { AnimatedBeam, BeamContainer, BeamNode } from "@/registry/default/ui/animated-beam";
import { Database, Lock, Server, Smartphone } from "lucide-react";
import React from "react";

export default function AnimatedBeamMultipleDemo() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const clientRef = React.useRef<HTMLDivElement>(null);
  const gatewayRef = React.useRef<HTMLDivElement>(null);
  const authRef = React.useRef<HTMLDivElement>(null);
  const dbRef = React.useRef<HTMLDivElement>(null);

  return (
    <BeamContainer
      ref={containerRef}
      className="mx-auto w-full flex items-center justify-center gap-16 rounded-xl border p-8"
    >
      {/* Client */}
      <div className="flex flex-col items-center gap-4">
        <BeamNode ref={clientRef} className="h-16 w-16">
          <Smartphone className="h-8 w-8 text-blue-500" />
        </BeamNode>
        <span className="text-sm font-medium text-muted-foreground">Client</span>
      </div>

      {/* API Gateway */}
      <div className="flex flex-col items-center gap-4">
        <BeamNode ref={gatewayRef} className="h-20 w-20 bg-gradient-to-br from-purple-500 to-purple-600">
          <Server className="h-10 w-10 text-white" />
        </BeamNode>
        <span className="text-sm font-medium text-muted-foreground">API Gateway</span>
      </div>

      {/* Backend Services */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <BeamNode ref={authRef} className="h-16 w-16">
            <Lock className="h-8 w-8 text-green-500" />
          </BeamNode>
          <span className="text-sm font-medium text-muted-foreground">Auth Service</span>
        </div>

        <div className="flex items-center gap-4">
          <BeamNode ref={dbRef} className="h-16 w-16">
            <Database className="h-8 w-8 text-orange-500" />
          </BeamNode>
          <span className="text-sm font-medium text-muted-foreground">Database</span>
        </div>
      </div>

      {/* Request Flow: Client -> Gateway */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={clientRef}
        toRef={gatewayRef}
        curvature={0.2}
        gradientStartColor="#3b82f6"
        gradientStopColor="#1d4ed8"
      />

      {/* Gateway -> Auth Service */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={gatewayRef}
        toRef={authRef}
        curvature={-0.3}
        delay={0.5}
        gradientStartColor="#8b5cf6"
        gradientStopColor="#7c3aed"
      />

      {/* Gateway -> Database */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={gatewayRef}
        toRef={dbRef}
        curvature={0.3}
        delay={0.5}
        gradientStartColor="#f59e0b"
        gradientStopColor="#d97706"
      />

      {/* Response Flow: Services -> Gateway */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={authRef}
        toRef={gatewayRef}
        curvature={0.3}
        delay={3}
        reverse={true}
        gradientStartColor="#10b981"
        gradientStopColor="#059669"
      />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={dbRef}
        toRef={gatewayRef}
        curvature={-0.3}
        delay={4}
        reverse={true}
        gradientStartColor="#ef4444"
        gradientStopColor="#dc2626"
      />

      {/* Gateway -> Client (Response) */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={gatewayRef}
        toRef={clientRef}
        curvature={-0.2}
        delay={5}
        reverse={true}
        gradientStartColor="#06b6d4"
        gradientStopColor="#0891b2"
      />
    </BeamContainer>
  );
}