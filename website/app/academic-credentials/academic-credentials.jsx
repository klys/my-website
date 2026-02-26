const credentialItems = await fetch("/academic-credentials.json").then((r) => r.json());

export default function AcademicCredentials() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
            Academic Credentials
          </h2>
          <p className="mt-2 text-lg/8 text-gray-300">Education and technical formation.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {credentialItems.map((item) => (
            <article key={item.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={item.datetime} className="text-gray-400">
                  {item.date}
                </time>
                {item.categories.map((cat) => (
                  <span
                    key={cat.title}
                    className="relative z-10 rounded-full bg-gray-800/60 px-3 py-1.5 font-medium text-gray-300"
                  >
                    {cat.title}
                  </span>
                ))}
              </div>
              <div className="group relative grow">
                <h3 className="mt-3 text-lg/6 font-semibold text-white">{item.title}</h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-400">{item.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <div className="flex size-10 items-center justify-center rounded-full bg-sky-900 text-sm font-semibold text-white">
                  {item.institution.name[0]}
                </div>
                <div className="text-sm/6">
                  <p className="font-semibold text-white">{item.institution.name}</p>
                  <p className="text-gray-400">{item.institution.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
