import { Button } from "@heroui/button";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { Card, CardBody } from "@heroui/card";
import {
  CloudUpload,
  Shield,
  Folder,
  Image as ImageIcon,
  ArrowRight,
  Star,
  Zap,
  Lock,
  Smartphone,
  Sparkles,
  Users,
  Heart,
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-gray-900 to-lime-600">
      {/* Use the unified Navbar component */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1">
        {/* Hero section */}
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="space-y-8 text-center lg:text-left">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-4 py-2 bg-lime-500/10 border border-lime-500/20 rounded-full text-lime-400 text-sm font-medium mb-4">
                    <Zap className="h-4 w-4 mr-2" />
                    Powered by ImageKit & Neon
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-lime-400 leading-tight">
                    Store your{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-500">
                      images
                    </span>{" "}
                    with energy
                  </h1>
                  <p className="text-xl md:text-2xl text-lime-200 leading-relaxed">
                    Unleash. Secure. Fast.
                  </p>
                  <p className="text-lg text-lime-300/80 max-w-2xl">
                    Experience next-generation cloud storage with blazing-fast
                    uploads, military-grade security, and seamless organization
                    for all your precious memories.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
                  <SignedOut>
                    <Link href="/sign-up">
                      <Button
                        size="lg"
                        className="bg-lime-500 hover:bg-lime-400 text-black font-bold px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        endContent={<ArrowRight className="h-5 w-5" />}
                      >
                        Get Started Free
                      </Button>
                    </Link>
                    <Link href="/sign-in">
                      <Button
                        size="lg"
                        variant="bordered"
                        className="border-2 border-lime-400 text-lime-400 hover:bg-lime-900/30 px-8 py-3 text-lg transition-all duration-300"
                      >
                        Sign In
                      </Button>
                    </Link>
                  </SignedOut>

                  <SignedIn>
                    <Link href="/dashboard">
                      <Button
                        size="lg"
                        className="bg-lime-500 hover:bg-lime-400 text-black font-bold px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        endContent={<ArrowRight className="h-5 w-5" />}
                      >
                        Go to Dashboard
                      </Button>
                    </Link>
                  </SignedIn>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-lime-500/20">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-lime-400">
                      99.9%
                    </div>
                    <div className="text-sm text-lime-300">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-lime-400">
                      5MB
                    </div>
                    <div className="text-sm text-lime-300">Max File Size</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-lime-400">
                      ∞
                    </div>
                    <div className="text-sm text-lime-300">Storage</div>
                  </div>
                </div>
              </div>

              {/* Hero Image/Animation */}
              <div className="flex justify-center order-first lg:order-last">
                <div className="relative w-64 h-64 md:w-96 md:h-96">
                  <div className="absolute inset-0 bg-gradient-to-tr from-lime-500/20 via-transparent to-lime-700/20 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <ImageIcon className="h-32 md:h-40 w-32 md:w-40 text-lime-400 drop-shadow-2xl" />
                      <Sparkles className="absolute -top-4 -right-4 h-6 w-6 text-lime-300 animate-bounce" />
                      <Star className="absolute -bottom-2 -left-2 h-4 w-4 text-yellow-400 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features section */}
        <section className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-r from-black/50 via-gray-900/50 to-black/50 backdrop-blur-sm">
          <div className="container mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-lime-400">
                Everything you need, nothing you don&apos;t
              </h2>
              <p className="text-lg text-lime-300/80 max-w-2xl mx-auto">
                Built for creators, photographers, and anyone who values their
                digital memories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border border-lime-400/20 bg-black/40 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <CardBody className="p-8 text-center">
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-lime-500/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <CloudUpload className="h-16 w-16 mx-auto text-lime-400 relative z-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-lime-300">
                    Lightning Fast Uploads
                  </h3>
                  <p className="text-lime-200/80">
                    Drag, drop, and watch your images upload at blazing speeds
                    with our optimized infrastructure.
                  </p>
                </CardBody>
              </Card>

              <Card className="border border-lime-400/20 bg-black/40 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <CardBody className="p-8 text-center">
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-lime-500/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <Shield className="h-16 w-16 mx-auto text-lime-400 relative z-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-lime-300">
                    Military-Grade Security
                  </h3>
                  <p className="text-lime-200/80">
                    Your memories are protected with enterprise-level encryption
                    and privacy controls.
                  </p>
                </CardBody>
              </Card>

              <Card className="border border-lime-400/20 bg-black/40 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <CardBody className="p-8 text-center">
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-lime-500/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <Folder className="h-16 w-16 mx-auto text-lime-400 relative z-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-lime-300">
                    Smart Organization
                  </h3>
                  <p className="text-lime-200/80">
                    Intelligent folder management and tagging system to keep
                    your collection organized.
                  </p>
                </CardBody>
              </Card>

              <Card className="border border-lime-400/20 bg-black/40 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <CardBody className="p-8 text-center">
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-lime-500/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <Smartphone className="h-16 w-16 mx-auto text-lime-400 relative z-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-lime-300">
                    Mobile Optimized
                  </h3>
                  <p className="text-lime-200/80">
                    Access your images anywhere, anytime with our responsive
                    design that works perfectly on all devices.
                  </p>
                </CardBody>
              </Card>

              <Card className="border border-lime-400/20 bg-black/40 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <CardBody className="p-8 text-center">
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-lime-500/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <Star className="h-16 w-16 mx-auto text-lime-400 relative z-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-lime-300">
                    Favorites & Collections
                  </h3>
                  <p className="text-lime-200/80">
                    Star your best shots and create custom collections for easy
                    browsing and sharing.
                  </p>
                </CardBody>
              </Card>

              <Card className="border border-lime-400/20 bg-black/40 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <CardBody className="p-8 text-center">
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-lime-500/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <Lock className="h-16 w-16 mx-auto text-lime-400 relative z-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-lime-300">
                    Private by Design
                  </h3>
                  <p className="text-lime-200/80">
                    Your images are private by default. You control who sees
                    what, when, and how.
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-16 md:py-20 px-4 md:px-6">
          <div className="container mx-auto text-center">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-lime-400">
                Trusted by creators worldwide
              </h2>
              <p className="text-lg text-lime-300/80">
                Join thousands of users who trust Droply with their precious
                memories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-lime-400" />
                <div className="text-3xl font-bold text-lime-400 mb-2">
                  10,000+
                </div>
                <div className="text-lime-300">Active Users</div>
              </div>
              <div className="text-center">
                <ImageIcon className="h-12 w-12 mx-auto mb-4 text-lime-400" />
                <div className="text-3xl font-bold text-lime-400 mb-2">1M+</div>
                <div className="text-lime-300">Images Stored</div>
              </div>
              <div className="text-center">
                <Heart className="h-12 w-12 mx-auto mb-4 text-lime-400" />
                <div className="text-3xl font-bold text-lime-400 mb-2">99%</div>
                <div className="text-lime-300">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-r from-lime-600/10 via-lime-500/5 to-lime-600/10">
          <div className="container mx-auto text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-lime-400">
                Ready to transform your image storage?
              </h2>
              <p className="text-xl mb-8 text-lime-200">
                Join Droply today and experience the future of cloud storage.
              </p>
              <SignedOut>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/sign-up">
                    <Button
                      size="lg"
                      className="bg-lime-500 hover:bg-lime-400 text-black font-bold px-12 py-4 text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      endContent={<ArrowRight className="h-6 w-6" />}
                    >
                      Start Free Today
                    </Button>
                  </Link>
                  <Link href="/sign-in">
                    <Button
                      size="lg"
                      variant="bordered"
                      className="border-2 border-lime-400 text-lime-400 hover:bg-lime-900/30 px-12 py-4 text-xl transition-all duration-300"
                    >
                      Sign In
                    </Button>
                  </Link>
                </div>
              </SignedOut>
              <SignedIn>
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    className="bg-lime-500 hover:bg-lime-400 text-black font-bold px-12 py-4 text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    endContent={<ArrowRight className="h-6 w-6" />}
                  >
                    Go to Dashboard
                  </Button>
                </Link>
              </SignedIn>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/60 border-t border-lime-400/20 py-8 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <ImageIcon className="h-6 w-6 text-lime-400" />
              <span className="text-xl font-bold text-lime-400">Droply</span>
            </div>
            <div className="text-lime-300 text-sm">
              © 2025 Droply. Built with ❤️ by{" "}
              <a
                href="https://github.com/PreetKot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lime-400 hover:text-lime-300 transition-colors"
              >
                PreetKot
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
