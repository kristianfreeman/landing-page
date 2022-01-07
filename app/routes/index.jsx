export default function Index() {
  return (
    <div class="p-8 flex flex-col items-center mx-auto max-w-2xl">
      <img
        class="w-16 h-16 rounded-full"
        src="/kristian.jpg"
      />

      <h1 class="my-4 text-2xl font-bold">Code with Kristian</h1>

      <p class="my-4 text-lg">
        I'm Kristian Freeman, a software developer and content creator. I make videos on YouTube (subscribe below!) and work as a developer advocate.
      </p>

      <div class="my-4 flex text-center w-1/2">
        <a class="flex-1 font-semibold" href="https://twitter.com/codewthkristian">
          Twitter
        </a>

        <a class="flex-1 font-semibold" href="https://youtube.com/codewithkristian">
          YouTube
        </a>

        <a class="flex-1 font-semibold" href="https://github.com/codewithkristian">
          GitHub
        </a>
      </div>

      <ul class="my-8 text-center w-2/3 mx-auto space-y-4">
        <li class="p-4 w-full rounded border transition-all hover:bg-orange-600 hover:text-white">
          <a
            target="_blank"
            href="https://kristianfreeman.com/sub"
          >
            Subscribe on YouTube
          </a>
        </li>

        <li class="p-4 w-full rounded border transition-all hover:bg-orange-600 hover:text-white">
          <a
            target="_blank"
            href="https://egghead.io/"
          >
            Watch my courses on Egghead
          </a>
        </li>
      </ul>
    </div>
  );
}
