export type BaseInfo = {
  name: string
  sex: string
  age: number | string
  city: string
  job_position: string
  mobile: string
  email: string
  github: string
}

export type WorkItem = {
  company: string
  position: string
  time: [string, string]
  jobs: string[]
}

export type EducationItem = {
  school: string
  time: [string, string]
}
