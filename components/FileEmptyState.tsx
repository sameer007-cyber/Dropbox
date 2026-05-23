"use client";

import { File } from "lucide-react";
import { Card, CardBody } from "@heroui/card";

interface FileEmptyStateProps {
  activeTab: string;
}

export default function FileEmptyState({ activeTab }: FileEmptyStateProps) {
  return (
    <Card className="border border-lime-400/30 bg-black/40 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
      <CardBody className="text-center py-20">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-lime-500/10 rounded-full blur-xl"></div>
          <File className="h-20 w-20 mx-auto text-lime-400 relative z-10" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-lime-400">
          {activeTab === "all" && "No files yet"}
          {activeTab === "starred" && "No starred files"}
          {activeTab === "trash" && "Trash is empty"}
        </h3>
        <p className="text-lime-200/80 text-lg max-w-md mx-auto leading-relaxed">
          {activeTab === "all" &&
            "Upload your first image to get started with your personal cloud storage"}
          {activeTab === "starred" &&
            "Mark important files with a star to find them quickly when you need them"}
          {activeTab === "trash" &&
            "Files you delete will appear here for safe keeping before permanent removal"}
        </p>
      </CardBody>
    </Card>
  );
}
