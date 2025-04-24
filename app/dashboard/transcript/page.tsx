"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Mic } from "lucide-react";
import { useState } from "react";

export default function TranscriptPage() {
  const [isUploading, setIsUploading] = useState(false);
  const [transcript, setTranscript] = useState("");

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    // TODO: Implement actual file upload and transcription
    setTimeout(() => {
      setTranscript(
        "This is a sample transcript of the uploaded audio file. The actual transcription will be generated using AI."
      );
      setIsUploading(false);
    }, 2000);
  };

  return (
    <div className="flex-1 w-full flex flex-col gap-8 p-8">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">AI Transcript</h1>
        <p className="text-lg text-muted-foreground">
          Upload audio files and get AI-generated transcripts
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Upload Audio</CardTitle>
            <CardDescription>
              Upload an audio file to generate a transcript
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="audio">Audio File</Label>
                <Input
                  id="audio"
                  type="file"
                  accept="audio/*"
                  onChange={handleFileUpload}
                  disabled={isUploading}
                />
              </div>
              <div className="flex gap-2">
                <Button disabled={isUploading}>
                  <Upload className="mr-2 h-4 w-4" />
                  Upload
                </Button>
                <Button variant="outline" disabled={isUploading}>
                  <Mic className="mr-2 h-4 w-4" />
                  Record
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Transcript</CardTitle>
            <CardDescription>
              AI-generated transcript of your audio
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isUploading ? (
              <div className="flex items-center justify-center h-32">
                <p className="text-muted-foreground">Processing audio...</p>
              </div>
            ) : transcript ? (
              <div className="prose max-w-none">
                <p>{transcript}</p>
              </div>
            ) : (
              <div className="flex items-center justify-center h-32">
                <p className="text-muted-foreground">
                  Upload an audio file to generate a transcript
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
