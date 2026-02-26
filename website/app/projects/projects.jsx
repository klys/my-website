import React, { useMemo, useState } from 'react'

/*const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    description: 'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    category: { title: 'Sales', href: '#' },
    author: {
      name: 'Lindsay Walton',
      role: 'Front-end Developer',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: 'Improve your customer experience',
    href: '#',
    description:
      'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis. Nostrud sint anim sunt aliqua. Nulla eu labore irure incididunt velit cillum quis magna dolore.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    category: { title: 'Business', href: '#' },
    author: {
      name: 'Tom Cook',
      role: 'Director of Product',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]*/

const projects = await fetch("/projects.json").then(r => r.json());

export default function Projects() {
  const [selectedDate, setSelectedDate] = useState("all");
  const [selectedCompany, setSelectedCompany] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const getDateLabel = (item) => {
    const datetimeYear = String(item?.datetime || "").slice(0, 4);
    if (/^\d{4}$/.test(datetimeYear)) return datetimeYear;
    const dateMatch = String(item?.date || "").match(/\b(19|20)\d{2}\b/);
    return dateMatch ? dateMatch[0] : "Other";
  };

  const dateOptions = useMemo(() => {
    const uniqueDates = [...new Set(projects.map(getDateLabel))];
    return uniqueDates.sort((a, b) => {
      const isNumA = /^\d{4}$/.test(a);
      const isNumB = /^\d{4}$/.test(b);
      if (isNumA && isNumB) return Number(b) - Number(a);
      if (isNumA) return -1;
      if (isNumB) return 1;
      return a.localeCompare(b);
    });
  }, []);

  const companyOptions = useMemo(() => {
    return [...new Set(projects.map((item) => item?.author?.name || "Unknown"))].sort();
  }, []);

  const typeOptions = useMemo(() => {
    const allTypes = projects.flatMap((item) => (item.categories || []).map((cat) => cat.title));
    return [...new Set(allTypes)].sort();
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((item) => {
      const itemDate = getDateLabel(item);
      const itemCompany = item?.author?.name || "Unknown";
      const itemTypes = (item.categories || []).map((cat) => cat.title);

      const matchesDate = selectedDate === "all" || itemDate === selectedDate;
      const matchesCompany = selectedCompany === "all" || itemCompany === selectedCompany;
      const matchesType = selectedType === "all" || itemTypes.includes(selectedType);

      return matchesDate && matchesCompany && matchesType;
    });
  }, [selectedDate, selectedCompany, selectedType]);

  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">Projects</h2>
          <p className="mt-2 text-lg/8 text-gray-300">Project portfolio.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-gray-200">Date</span>
            <select
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white"
            >
              <option value="all">All dates</option>
              {dateOptions.map((date) => (
                <option key={date} value={date}>
                  {date}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-gray-200">Company</span>
            <select
              value={selectedCompany}
              onChange={(e) => setSelectedCompany(e.target.value)}
              className="rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white"
            >
              <option value="all">All companies</option>
              {companyOptions.map((company) => (
                <option key={company} value={company}>
                  {company}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-gray-200">Project type</span>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white"
            >
              <option value="all">All types</option>
              {typeOptions.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
          <div className="flex items-end">
            <button
              type="button"
              onClick={() => {
                setSelectedDate("all");
                setSelectedCompany("all");
                setSelectedType("all");
              }}
              className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"
            >
              Clear filters
            </button>
          </div>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {filteredProjects.map((item, index) => (
            <article
              key={`${item.id}-${item.title}-${item.datetime || index}`}
              className="flex max-w-xl flex-col items-start justify-between"
            >
                <img src={item.image} />
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={item.datetime} className="text-gray-400">
                  {item.date}
                </time>
                {item.categories.map((cat) => {
                    return(
                        <a
                            key={`${item.title}-${cat.title}`}
                            href={cat.href}
                            className="relative z-10 rounded-full bg-gray-800/60 px-3 py-1.5 font-medium text-gray-300 hover:bg-gray-800"
                        >
                        {cat.title}
                        </a>
                    )
                })}
                
              </div>
              <div className="group relative grow">
                <h3 className="mt-3 text-lg/6 font-semibold text-white group-hover:text-gray-300">
                  <a href={item.href}>
                    <span className="absolute inset-0" />
                    {item.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-400">{item.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                <img alt="" src={item.author.imageUrl} className="size-10 rounded-full bg-sky-800" />
                <div className="text-sm/6">
                  <p className="font-semibold text-white">
                    <a href={item.author.href}>
                      <span className="absolute inset-0" />
                      {item.author.name}
                    </a>
                  </p>
                  <p className="text-gray-400">{item.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        {filteredProjects.length === 0 && (
          <p className="mt-8 text-sm text-gray-400">No projects match the selected filters.</p>
        )}
      </div>
    </div>
  )
}
