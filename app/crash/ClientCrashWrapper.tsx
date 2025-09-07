  // app/crash/ClientCrashWrapper.tsx
    "use client"; // Обязательно добавьте эту директиву!

    import dynamic from 'next/dynamic';

    // Импортируем сам игровой компонент.
    // Убедитесь, что путь к PhaserCrashGame правильный относительно этого нового файла.
    // Если PhaserCrashGame находится в app/crash/components/crash/, то путь будет ../../components/crash/PhaserCrashGame
    // Если PhaserCrashGame находится в app/components/crash/, то путь будет ../../components/crash/PhaserCrashGame
    const PhaserCrashGame = dynamic(() => import('../../components/crash/PhaserCrashGame'), { ssr: false });

    export default function ClientCrashWrapper() {
      return <PhaserCrashGame />;
    }
    

