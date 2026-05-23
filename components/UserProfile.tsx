"use client";

import { useUser, useClerk } from "@clerk/nextjs";
import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader, CardFooter } from "@heroui/card";
import { Spinner } from "@heroui/spinner";
import { Avatar } from "@heroui/avatar";
import { Divider } from "@heroui/divider";
import Badge from "@/components/ui/Badge";
import { useRouter } from "next/navigation";
import { Mail, User, LogOut, Shield, ArrowRight } from "lucide-react";

export default function UserProfile() {
  const { isLoaded, isSignedIn, user } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();

  if (!isLoaded) {
    return (
      <div className="flex flex-col justify-center items-center p-12">
        <Spinner size="lg" color="success" />
        <p className="mt-4 text-lime-400">Loading your profile...</p>
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <Card className="max-w-md mx-auto border border-lime-500 bg-black/40 shadow-lg hover:shadow-2xl transition-shadow">
        <CardHeader className="flex gap-3">
          <User className="h-6 w-6 text-lime-400" />
          <h2 className="text-xl font-semibold text-lime-400">User Profile</h2>
        </CardHeader>
        <Divider className="bg-lime-700" />
        <CardBody className="text-center py-10">
          <div className="mb-6">
            <Avatar
              name="Guest"
              size="lg"
              className="mx-auto mb-4 bg-lime-900 text-lime-400"
            />
            <p className="text-lg font-medium text-lime-400">Not Signed In</p>
            <p className="text-lime-500 mt-2">
              Please sign in to access your profile
            </p>
          </div>
          <Button
            variant="solid"
            className="bg-lime-500 hover:bg-lime-400 text-black font-bold px-8"
            size="lg"
            onClick={() => router.push("/sign-in")}
            endContent={<ArrowRight className="h-4 w-4 text-black" />}
          >
            Sign In
          </Button>
        </CardBody>
      </Card>
    );
  }

  const fullName = `${user.firstName || ""} ${user.lastName || ""}`.trim();
  const email = user.primaryEmailAddress?.emailAddress || "";
  const initials = fullName
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase();

  const userRole = user.publicMetadata.role as string | undefined;

  const handleSignOut = () => {
    signOut(() => {
      router.push("/");
    });
  };

  return (
    <Card className="max-w-md mx-auto border border-lime-500 bg-black/40 shadow-lg hover:shadow-2xl transition-shadow">
      <CardHeader className="flex gap-3">
        <User className="h-6 w-6 text-lime-400" />
        <h2 className="text-xl font-semibold text-lime-400">User Profile</h2>
      </CardHeader>
      <Divider className="bg-lime-700" />
      <CardBody className="py-6">
        <div className="flex flex-col items-center text-center mb-6">
          {user.imageUrl ? (
            <Avatar
              src={user.imageUrl}
              alt={fullName}
              size="lg"
              className="mb-4 h-24 w-24 ring-2 ring-lime-500"
            />
          ) : (
            <Avatar
              name={initials}
              size="lg"
              className="mb-4 h-24 w-24 text-lg bg-lime-900 text-lime-400 ring-2 ring-lime-500"
            />
          )}
          <h3 className="text-xl font-semibold text-lime-400">{fullName}</h3>
          {user.emailAddresses && user.emailAddresses.length > 0 && (
            <div className="flex items-center gap-2 mt-1 text-lime-500">
              <Mail className="h-4 w-4" />
              <span>{email}</span>
            </div>
          )}
          {userRole && (
            <Badge
              color="success"
              variant="flat"
              className="mt-3 bg-lime-700 text-lime-200"
              aria-label={`User role: ${userRole}`}
            >
              {userRole}
            </Badge>
          )}
        </div>

        <Divider className="my-4 bg-lime-700" />

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-lime-400" />
              <span className="font-medium text-lime-300">Account Status</span>
            </div>
            <Badge
              color="success"
              variant="flat"
              className="bg-lime-700 text-lime-200"
              aria-label="Account status: Active"
            >
              Active
            </Badge>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-lime-400" />
              <span className="font-medium text-lime-300">
                Email Verification
              </span>
            </div>
            <Badge
              color={
                user.emailAddresses?.[0]?.verification?.status === "verified"
                  ? "success"
                  : "warning"
              }
              variant="flat"
              className={
                user.emailAddresses?.[0]?.verification?.status === "verified"
                  ? "bg-lime-700 text-lime-200"
                  : "bg-yellow-700 text-yellow-200"
              }
              aria-label={`Email verification status: ${
                user.emailAddresses?.[0]?.verification?.status === "verified"
                  ? "Verified"
                  : "Pending"
              }`}
            >
              {user.emailAddresses?.[0]?.verification?.status === "verified"
                ? "Verified"
                : "Pending"}
            </Badge>
          </div>
        </div>
      </CardBody>
      <Divider className="bg-lime-700" />
      <CardFooter className="flex justify-between">
        <Button
          variant="flat"
          className="text-red-500 hover:bg-red-900"
          startContent={<LogOut className="h-4 w-4" />}
          onClick={handleSignOut}
        >
          Sign Out
        </Button>
      </CardFooter>
    </Card>
  );
}
