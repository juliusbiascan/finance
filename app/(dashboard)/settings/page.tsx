
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SettingsPage = () => {
  return (
    <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="text-xl line-clamp-1">
            Settings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-8">
            <div className="mb-4">
              <svg width="48" height="48" fill="none" viewBox="0 0 24 24" className="text-primary">
                <rect width="24" height="24" rx="12" fill="#f3f4f6" />
                <path d="M7 8h10a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm10 2H7v4h10v-4zm-2 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" fill="#6366f1" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold mb-2">Connect Your Wallet</h2>
            <p className="text-gray-500 mb-6 text-center max-w-md">
              Securely link your digital wallet to manage your account settings and access personalized features.
            </p>
            <button
              className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition"
              disabled
            >
              Connect Wallet (Coming Soon)
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default SettingsPage;