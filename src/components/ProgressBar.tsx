import * as Progress from "@radix-ui/react-progress";

interface Props {
   progress: number
}

export function ProgressBar ({ progress }: Props) {
   return (
      <Progress.Root className="h-3 rounded-xl bg-zinc-700 w-full mt-4">

         <Progress.Indicator
            role="progressbar"
            aria-label="Progresso de hábitos completados nesse dia"
            aria-valuenow={progress}
            className="h-3 rounded-xl bg-violet-600 transition-all"
            style={{ width: `${progress}%` }}
         />
         
      </Progress.Root>
   )
}