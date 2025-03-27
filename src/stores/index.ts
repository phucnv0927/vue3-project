const modules = import.meta.glob('./**/*.ts', { eager: true })

const stores = Object.keys(modules).reduce<Record<string, any>>((acc, path) => {
  const module = modules[path] as Record<string, any>
  return { ...acc, ...module }
}, {})

export default stores
