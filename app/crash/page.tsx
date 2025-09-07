import ClientCrashWrapper from './ClientCrashWrapper';

    export default function CrashPage() {
      return (
        <div className="w-full h-full min-h-screen bg-black flex items-center justify-center">
          {/* Теперь используйте вашу обертку */}
          <ClientCrashWrapper />
        </div>
      );
    }
