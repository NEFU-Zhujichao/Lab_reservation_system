export interface RespBean{
    code?: number;
    message?: string;
    data?: object;
}

export interface Role {
    id?: number;
    name?: string;
}

export interface Lab{
    id?: number;
    name?: string;
    number?: number;
    detail?: string;
}

export interface User{
    id?: number;
    name?: string;
    username?: string;
    password?: string;
    roles?: Role[];
}

export interface Course{
    id?: number;
    name?: string;
    studentNumber?: number;
    periods?: number;
}

export interface Courses {
  name?: string;
  id?: number;
  courseName?: string;
  studentNumber?: number;
  periods?: number;
}

export interface reservationTime{
    id?: number;
    uid?: number;
    cid?: number;
    labName?: string;
    week?: number;
    day?: number;
    section?: number;
}

export interface Appointment{
    id?: number;
    uid?: number;
    uname?: string;
    cid?: number;
    cname?: string;
    labName?: string;
    reservationTimes: reservationTime[];
}

export interface CheckboxState{
    week: number;
    disabled: boolean;
}

export interface Day{
    day: string | number;
    checkboxs: CheckboxState[];
}

export interface Section{
    sectionId: number;
    days: Day[];
}


export function listReservationState ():Section[] {
    return [
        {
          sectionId: 1,
          days: [
            {
              day: 1,
              checkboxs: [
                {
                  week: 1,
                  disabled: false,
                },
                {
                  week: 2,
                  disabled: false,
                },
                {
                  week: 3,
                  disabled: false,
                },
                {
                  week: 4,
                  disabled: false,
                },
                {
                  week: 5,
                  disabled: false,
                },
                {
                  week: 6,
                  disabled: false,
                },
                {
                  week: 7,
                  disabled: false,
                },
                {
                  week: 8,
                  disabled: false,
                },
                {
                  week: 9,
                  disabled: false,
                },
                {
                  week: 10,
                  disabled: false,
                },
                {
                  week: 11,
                  disabled: false,
                },
                {
                  week: 12,
                  disabled: false,
                },
                {
                  week: 13,
                  disabled: false,
                },
                {
                  week: 14,
                  disabled: false,
                },
                {
                  week: 15,
                  disabled: false,
                },
                {
                  week: 16,
                  disabled: false,
                },
                {
                  week: 17,
                  disabled: false,
                },
                {
                  week: 18,
                  disabled: false,
                },
              ],
            },
            {
                day: 2,
                checkboxs: [
                  {
                    week: 1,
                    disabled: false,
                  },
                  {
                    week: 2,
                    disabled: false,
                  },
                  {
                    week: 3,
                    disabled: false,
                  },
                  {
                    week: 4,
                    disabled: false,
                  },
                  {
                    week: 5,
                    disabled: false,
                  },
                  {
                    week: 6,
                    disabled: false,
                  },
                  {
                    week: 7,
                    disabled: false,
                  },
                  {
                    week: 8,
                    disabled: false,
                  },
                  {
                    week: 9,
                    disabled: false,
                  },
                  {
                    week: 10,
                    disabled: false,
                  },
                  {
                    week: 11,
                    disabled: false,
                  },
                  {
                    week: 12,
                    disabled: false,
                  },
                  {
                    week: 13,
                    disabled: false,
                  },
                  {
                    week: 14,
                    disabled: false,
                  },
                  {
                    week: 15,
                    disabled: false,
                  },
                  {
                    week: 16,
                    disabled: false,
                  },
                  {
                    week: 17,
                    disabled: false,
                  },
                  {
                    week: 18,
                    disabled: false,
                  },
                ],
            },
            {
                day: 3,
                checkboxs: [
                  {
                    week: 1,
                    disabled: false,
                  },
                  {
                    week: 2,
                    disabled: false,
                  },
                  {
                    week: 3,
                    disabled: false,
                  },
                  {
                    week: 4,
                    disabled: false,
                  },
                  {
                    week: 5,
                    disabled: false,
                  },
                  {
                    week: 6,
                    disabled: false,
                  },
                  {
                    week: 7,
                    disabled: false,
                  },
                  {
                    week: 8,
                    disabled: false,
                  },
                  {
                    week: 9,
                    disabled: false,
                  },
                  {
                    week: 10,
                    disabled: false,
                  },
                  {
                    week: 11,
                    disabled: false,
                  },
                  {
                    week: 12,
                    disabled: false,
                  },
                  {
                    week: 13,
                    disabled: false,
                  },
                  {
                    week: 14,
                    disabled: false,
                  },
                  {
                    week: 15,
                    disabled: false,
                  },
                  {
                    week: 16,
                    disabled: false,
                  },
                  {
                    week: 17,
                    disabled: false,
                  },
                  {
                    week: 18,
                    disabled: false,
                  },
                ],
            },
            {
                day: 4,
                checkboxs: [
                  {
                    week: 1,
                    disabled: false,
                  },
                  {
                    week: 2,
                    disabled: false,
                  },
                  {
                    week: 3,
                    disabled: false,
                  },
                  {
                    week: 4,
                    disabled: false,
                  },
                  {
                    week: 5,
                    disabled: false,
                  },
                  {
                    week: 6,
                    disabled: false,
                  },
                  {
                    week: 7,
                    disabled: false,
                  },
                  {
                    week: 8,
                    disabled: false,
                  },
                  {
                    week: 9,
                    disabled: false,
                  },
                  {
                    week: 10,
                    disabled: false,
                  },
                  {
                    week: 11,
                    disabled: false,
                  },
                  {
                    week: 12,
                    disabled: false,
                  },
                  {
                    week: 13,
                    disabled: false,
                  },
                  {
                    week: 14,
                    disabled: false,
                  },
                  {
                    week: 15,
                    disabled: false,
                  },
                  {
                    week: 16,
                    disabled: false,
                  },
                  {
                    week: 17,
                    disabled: false,
                  },
                  {
                    week: 18,
                    disabled: false,
                  },
                ],
            },
            {
                day: 5,
                checkboxs: [
                  {
                    week: 1,
                    disabled: false,
                  },
                  {
                    week: 2,
                    disabled: false,
                  },
                  {
                    week: 3,
                    disabled: false,
                  },
                  {
                    week: 4,
                    disabled: false,
                  },
                  {
                    week: 5,
                    disabled: false,
                  },
                  {
                    week: 6,
                    disabled: false,
                  },
                  {
                    week: 7,
                    disabled: false,
                  },
                  {
                    week: 8,
                    disabled: false,
                  },
                  {
                    week: 9,
                    disabled: false,
                  },
                  {
                    week: 10,
                    disabled: false,
                  },
                  {
                    week: 11,
                    disabled: false,
                  },
                  {
                    week: 12,
                    disabled: false,
                  },
                  {
                    week: 13,
                    disabled: false,
                  },
                  {
                    week: 14,
                    disabled: false,
                  },
                  {
                    week: 15,
                    disabled: false,
                  },
                  {
                    week: 16,
                    disabled: false,
                  },
                  {
                    week: 17,
                    disabled: false,
                  },
                  {
                    week: 18,
                    disabled: false,
                  },
                ],
            },
            {
                day: 6,
                checkboxs: [
                  {
                    week: 1,
                    disabled: false,
                  },
                  {
                    week: 2,
                    disabled: false,
                  },
                  {
                    week: 3,
                    disabled: false,
                  },
                  {
                    week: 4,
                    disabled: false,
                  },
                  {
                    week: 5,
                    disabled: false,
                  },
                  {
                    week: 6,
                    disabled: false,
                  },
                  {
                    week: 7,
                    disabled: false,
                  },
                  {
                    week: 8,
                    disabled: false,
                  },
                  {
                    week: 9,
                    disabled: false,
                  },
                  {
                    week: 10,
                    disabled: false,
                  },
                  {
                    week: 11,
                    disabled: false,
                  },
                  {
                    week: 12,
                    disabled: false,
                  },
                  {
                    week: 13,
                    disabled: false,
                  },
                  {
                    week: 14,
                    disabled: false,
                  },
                  {
                    week: 15,
                    disabled: false,
                  },
                  {
                    week: 16,
                    disabled: false,
                  },
                  {
                    week: 17,
                    disabled: false,
                  },
                  {
                    week: 18,
                    disabled: false,
                  },
                ],
            },
            {
                day: 7,
                checkboxs: [
                  {
                    week: 1,
                    disabled: false,
                  },
                  {
                    week: 2,
                    disabled: false,
                  },
                  {
                    week: 3,
                    disabled: false,
                  },
                  {
                    week: 4,
                    disabled: false,
                  },
                  {
                    week: 5,
                    disabled: false,
                  },
                  {
                    week: 6,
                    disabled: false,
                  },
                  {
                    week: 7,
                    disabled: false,
                  },
                  {
                    week: 8,
                    disabled: false,
                  },
                  {
                    week: 9,
                    disabled: false,
                  },
                  {
                    week: 10,
                    disabled: false,
                  },
                  {
                    week: 11,
                    disabled: false,
                  },
                  {
                    week: 12,
                    disabled: false,
                  },
                  {
                    week: 13,
                    disabled: false,
                  },
                  {
                    week: 14,
                    disabled: false,
                  },
                  {
                    week: 15,
                    disabled: false,
                  },
                  {
                    week: 16,
                    disabled: false,
                  },
                  {
                    week: 17,
                    disabled: false,
                  },
                  {
                    week: 18,
                    disabled: false,
                  },
                ],
            },
          ],
        },
        {
          sectionId: 2,
          days: [
            {
              day: 1,
              checkboxs: [
                {
                  week: 1,
                  disabled: false,
                },
                {
                  week: 2,
                  disabled: false,
                },
                {
                  week: 3,
                  disabled: false,
                },
                {
                  week: 4,
                  disabled: false,
                },
                {
                  week: 5,
                  disabled: false,
                },
                {
                  week: 6,
                  disabled: false,
                },
                {
                  week: 7,
                  disabled: false,
                },
                {
                  week: 8,
                  disabled: false,
                },
                {
                  week: 9,
                  disabled: false,
                },
                {
                  week: 10,
                  disabled: false,
                },
                {
                  week: 11,
                  disabled: false,
                },
                {
                  week: 12,
                  disabled: false,
                },
                {
                  week: 13,
                  disabled: false,
                },
                {
                  week: 14,
                  disabled: false,
                },
                {
                  week: 15,
                  disabled: false,
                },
                {
                  week: 16,
                  disabled: false,
                },
                {
                  week: 17,
                  disabled: false,
                },
                {
                  week: 18,
                  disabled: false,
                },
              ],
            },
            {
                day: 2,
                checkboxs: [
                  {
                    week: 1,
                    disabled: false,
                  },
                  {
                    week: 2,
                    disabled: false,
                  },
                  {
                    week: 3,
                    disabled: false,
                  },
                  {
                    week: 4,
                    disabled: false,
                  },
                  {
                    week: 5,
                    disabled: false,
                  },
                  {
                    week: 6,
                    disabled: false,
                  },
                  {
                    week: 7,
                    disabled: false,
                  },
                  {
                    week: 8,
                    disabled: false,
                  },
                  {
                    week: 9,
                    disabled: false,
                  },
                  {
                    week: 10,
                    disabled: false,
                  },
                  {
                    week: 11,
                    disabled: false,
                  },
                  {
                    week: 12,
                    disabled: false,
                  },
                  {
                    week: 13,
                    disabled: false,
                  },
                  {
                    week: 14,
                    disabled: false,
                  },
                  {
                    week: 15,
                    disabled: false,
                  },
                  {
                    week: 16,
                    disabled: false,
                  },
                  {
                    week: 17,
                    disabled: false,
                  },
                  {
                    week: 18,
                    disabled: false,
                  },
                ],
            },
            {
                day: 3,
                checkboxs: [
                  {
                    week: 1,
                    disabled: false,
                  },
                  {
                    week: 2,
                    disabled: false,
                  },
                  {
                    week: 3,
                    disabled: false,
                  },
                  {
                    week: 4,
                    disabled: false,
                  },
                  {
                    week: 5,
                    disabled: false,
                  },
                  {
                    week: 6,
                    disabled: false,
                  },
                  {
                    week: 7,
                    disabled: false,
                  },
                  {
                    week: 8,
                    disabled: false,
                  },
                  {
                    week: 9,
                    disabled: false,
                  },
                  {
                    week: 10,
                    disabled: false,
                  },
                  {
                    week: 11,
                    disabled: false,
                  },
                  {
                    week: 12,
                    disabled: false,
                  },
                  {
                    week: 13,
                    disabled: false,
                  },
                  {
                    week: 14,
                    disabled: false,
                  },
                  {
                    week: 15,
                    disabled: false,
                  },
                  {
                    week: 16,
                    disabled: false,
                  },
                  {
                    week: 17,
                    disabled: false,
                  },
                  {
                    week: 18,
                    disabled: false,
                  },
                ],
            },
            {
                day: 4,
                checkboxs: [
                  {
                    week: 1,
                    disabled: false,
                  },
                  {
                    week: 2,
                    disabled: false,
                  },
                  {
                    week: 3,
                    disabled: false,
                  },
                  {
                    week: 4,
                    disabled: false,
                  },
                  {
                    week: 5,
                    disabled: false,
                  },
                  {
                    week: 6,
                    disabled: false,
                  },
                  {
                    week: 7,
                    disabled: false,
                  },
                  {
                    week: 8,
                    disabled: false,
                  },
                  {
                    week: 9,
                    disabled: false,
                  },
                  {
                    week: 10,
                    disabled: false,
                  },
                  {
                    week: 11,
                    disabled: false,
                  },
                  {
                    week: 12,
                    disabled: false,
                  },
                  {
                    week: 13,
                    disabled: false,
                  },
                  {
                    week: 14,
                    disabled: false,
                  },
                  {
                    week: 15,
                    disabled: false,
                  },
                  {
                    week: 16,
                    disabled: false,
                  },
                  {
                    week: 17,
                    disabled: false,
                  },
                  {
                    week: 18,
                    disabled: false,
                  },
                ],
            },
            {
                day: 5,
                checkboxs: [
                  {
                    week: 1,
                    disabled: false,
                  },
                  {
                    week: 2,
                    disabled: false,
                  },
                  {
                    week: 3,
                    disabled: false,
                  },
                  {
                    week: 4,
                    disabled: false,
                  },
                  {
                    week: 5,
                    disabled: false,
                  },
                  {
                    week: 6,
                    disabled: false,
                  },
                  {
                    week: 7,
                    disabled: false,
                  },
                  {
                    week: 8,
                    disabled: false,
                  },
                  {
                    week: 9,
                    disabled: false,
                  },
                  {
                    week: 10,
                    disabled: false,
                  },
                  {
                    week: 11,
                    disabled: false,
                  },
                  {
                    week: 12,
                    disabled: false,
                  },
                  {
                    week: 13,
                    disabled: false,
                  },
                  {
                    week: 14,
                    disabled: false,
                  },
                  {
                    week: 15,
                    disabled: false,
                  },
                  {
                    week: 16,
                    disabled: false,
                  },
                  {
                    week: 17,
                    disabled: false,
                  },
                  {
                    week: 18,
                    disabled: false,
                  },
                ],
            },
            {
                day: 6,
                checkboxs: [
                  {
                    week: 1,
                    disabled: false,
                  },
                  {
                    week: 2,
                    disabled: false,
                  },
                  {
                    week: 3,
                    disabled: false,
                  },
                  {
                    week: 4,
                    disabled: false,
                  },
                  {
                    week: 5,
                    disabled: false,
                  },
                  {
                    week: 6,
                    disabled: false,
                  },
                  {
                    week: 7,
                    disabled: false,
                  },
                  {
                    week: 8,
                    disabled: false,
                  },
                  {
                    week: 9,
                    disabled: false,
                  },
                  {
                    week: 10,
                    disabled: false,
                  },
                  {
                    week: 11,
                    disabled: false,
                  },
                  {
                    week: 12,
                    disabled: false,
                  },
                  {
                    week: 13,
                    disabled: false,
                  },
                  {
                    week: 14,
                    disabled: false,
                  },
                  {
                    week: 15,
                    disabled: false,
                  },
                  {
                    week: 16,
                    disabled: false,
                  },
                  {
                    week: 17,
                    disabled: false,
                  },
                  {
                    week: 18,
                    disabled: false,
                  },
                ],
            },
            {
                day: 7,
                checkboxs: [
                  {
                    week: 1,
                    disabled: false,
                  },
                  {
                    week: 2,
                    disabled: false,
                  },
                  {
                    week: 3,
                    disabled: false,
                  },
                  {
                    week: 4,
                    disabled: false,
                  },
                  {
                    week: 5,
                    disabled: false,
                  },
                  {
                    week: 6,
                    disabled: false,
                  },
                  {
                    week: 7,
                    disabled: false,
                  },
                  {
                    week: 8,
                    disabled: false,
                  },
                  {
                    week: 9,
                    disabled: false,
                  },
                  {
                    week: 10,
                    disabled: false,
                  },
                  {
                    week: 11,
                    disabled: false,
                  },
                  {
                    week: 12,
                    disabled: false,
                  },
                  {
                    week: 13,
                    disabled: false,
                  },
                  {
                    week: 14,
                    disabled: false,
                  },
                  {
                    week: 15,
                    disabled: false,
                  },
                  {
                    week: 16,
                    disabled: false,
                  },
                  {
                    week: 17,
                    disabled: false,
                  },
                  {
                    week: 18,
                    disabled: false,
                  },
                ],
            },
          ],
        },
        {
          sectionId: 3,
          days: [
            {
              day: 1,
              checkboxs: [
                {
                  week: 1,
                  disabled: false,
                },
                {
                  week: 2,
                  disabled: false,
                },
                {
                  week: 3,
                  disabled: false,
                },
                {
                  week: 4,
                  disabled: false,
                },
                {
                  week: 5,
                  disabled: false,
                },
                {
                  week: 6,
                  disabled: false,
                },
                {
                  week: 7,
                  disabled: false,
                },
                {
                  week: 8,
                  disabled: false,
                },
                {
                  week: 9,
                  disabled: false,
                },
                {
                  week: 10,
                  disabled: false,
                },
                {
                  week: 11,
                  disabled: false,
                },
                {
                  week: 12,
                  disabled: false,
                },
                {
                  week: 13,
                  disabled: false,
                },
                {
                  week: 14,
                  disabled: false,
                },
                {
                  week: 15,
                  disabled: false,
                },
                {
                  week: 16,
                  disabled: false,
                },
                {
                  week: 17,
                  disabled: false,
                },
                {
                  week: 18,
                  disabled: false,
                },
              ],
            },
            {
                day: 2,
                checkboxs: [
                  {
                    week: 1,
                    disabled: false,
                  },
                  {
                    week: 2,
                    disabled: false,
                  },
                  {
                    week: 3,
                    disabled: false,
                  },
                  {
                    week: 4,
                    disabled: false,
                  },
                  {
                    week: 5,
                    disabled: false,
                  },
                  {
                    week: 6,
                    disabled: false,
                  },
                  {
                    week: 7,
                    disabled: false,
                  },
                  {
                    week: 8,
                    disabled: false,
                  },
                  {
                    week: 9,
                    disabled: false,
                  },
                  {
                    week: 10,
                    disabled: false,
                  },
                  {
                    week: 11,
                    disabled: false,
                  },
                  {
                    week: 12,
                    disabled: false,
                  },
                  {
                    week: 13,
                    disabled: false,
                  },
                  {
                    week: 14,
                    disabled: false,
                  },
                  {
                    week: 15,
                    disabled: false,
                  },
                  {
                    week: 16,
                    disabled: false,
                  },
                  {
                    week: 17,
                    disabled: false,
                  },
                  {
                    week: 18,
                    disabled: false,
                  },
                ],
            },
            {
                day: 3,
                checkboxs: [
                  {
                    week: 1,
                    disabled: false,
                  },
                  {
                    week: 2,
                    disabled: false,
                  },
                  {
                    week: 3,
                    disabled: false,
                  },
                  {
                    week: 4,
                    disabled: false,
                  },
                  {
                    week: 5,
                    disabled: false,
                  },
                  {
                    week: 6,
                    disabled: false,
                  },
                  {
                    week: 7,
                    disabled: false,
                  },
                  {
                    week: 8,
                    disabled: false,
                  },
                  {
                    week: 9,
                    disabled: false,
                  },
                  {
                    week: 10,
                    disabled: false,
                  },
                  {
                    week: 11,
                    disabled: false,
                  },
                  {
                    week: 12,
                    disabled: false,
                  },
                  {
                    week: 13,
                    disabled: false,
                  },
                  {
                    week: 14,
                    disabled: false,
                  },
                  {
                    week: 15,
                    disabled: false,
                  },
                  {
                    week: 16,
                    disabled: false,
                  },
                  {
                    week: 17,
                    disabled: false,
                  },
                  {
                    week: 18,
                    disabled: false,
                  },
                ],
            },
            {
                day: 4,
                checkboxs: [
                  {
                    week: 1,
                    disabled: false,
                  },
                  {
                    week: 2,
                    disabled: false,
                  },
                  {
                    week: 3,
                    disabled: false,
                  },
                  {
                    week: 4,
                    disabled: false,
                  },
                  {
                    week: 5,
                    disabled: false,
                  },
                  {
                    week: 6,
                    disabled: false,
                  },
                  {
                    week: 7,
                    disabled: false,
                  },
                  {
                    week: 8,
                    disabled: false,
                  },
                  {
                    week: 9,
                    disabled: false,
                  },
                  {
                    week: 10,
                    disabled: false,
                  },
                  {
                    week: 11,
                    disabled: false,
                  },
                  {
                    week: 12,
                    disabled: false,
                  },
                  {
                    week: 13,
                    disabled: false,
                  },
                  {
                    week: 14,
                    disabled: false,
                  },
                  {
                    week: 15,
                    disabled: false,
                  },
                  {
                    week: 16,
                    disabled: false,
                  },
                  {
                    week: 17,
                    disabled: false,
                  },
                  {
                    week: 18,
                    disabled: false,
                  },
                ],
            },
            {
                day: 5,
                checkboxs: [
                  {
                    week: 1,
                    disabled: false,
                  },
                  {
                    week: 2,
                    disabled: false,
                  },
                  {
                    week: 3,
                    disabled: false,
                  },
                  {
                    week: 4,
                    disabled: false,
                  },
                  {
                    week: 5,
                    disabled: false,
                  },
                  {
                    week: 6,
                    disabled: false,
                  },
                  {
                    week: 7,
                    disabled: false,
                  },
                  {
                    week: 8,
                    disabled: false,
                  },
                  {
                    week: 9,
                    disabled: false,
                  },
                  {
                    week: 10,
                    disabled: false,
                  },
                  {
                    week: 11,
                    disabled: false,
                  },
                  {
                    week: 12,
                    disabled: false,
                  },
                  {
                    week: 13,
                    disabled: false,
                  },
                  {
                    week: 14,
                    disabled: false,
                  },
                  {
                    week: 15,
                    disabled: false,
                  },
                  {
                    week: 16,
                    disabled: false,
                  },
                  {
                    week: 17,
                    disabled: false,
                  },
                  {
                    week: 18,
                    disabled: false,
                  },
                ],
            },
            {
                day: 6,
                checkboxs: [
                  {
                    week: 1,
                    disabled: false,
                  },
                  {
                    week: 2,
                    disabled: false,
                  },
                  {
                    week: 3,
                    disabled: false,
                  },
                  {
                    week: 4,
                    disabled: false,
                  },
                  {
                    week: 5,
                    disabled: false,
                  },
                  {
                    week: 6,
                    disabled: false,
                  },
                  {
                    week: 7,
                    disabled: false,
                  },
                  {
                    week: 8,
                    disabled: false,
                  },
                  {
                    week: 9,
                    disabled: false,
                  },
                  {
                    week: 10,
                    disabled: false,
                  },
                  {
                    week: 11,
                    disabled: false,
                  },
                  {
                    week: 12,
                    disabled: false,
                  },
                  {
                    week: 13,
                    disabled: false,
                  },
                  {
                    week: 14,
                    disabled: false,
                  },
                  {
                    week: 15,
                    disabled: false,
                  },
                  {
                    week: 16,
                    disabled: false,
                  },
                  {
                    week: 17,
                    disabled: false,
                  },
                  {
                    week: 18,
                    disabled: false,
                  },
                ],
            },
            {
                day: 7,
                checkboxs: [
                  {
                    week: 1,
                    disabled: false,
                  },
                  {
                    week: 2,
                    disabled: false,
                  },
                  {
                    week: 3,
                    disabled: false,
                  },
                  {
                    week: 4,
                    disabled: false,
                  },
                  {
                    week: 5,
                    disabled: false,
                  },
                  {
                    week: 6,
                    disabled: false,
                  },
                  {
                    week: 7,
                    disabled: false,
                  },
                  {
                    week: 8,
                    disabled: false,
                  },
                  {
                    week: 9,
                    disabled: false,
                  },
                  {
                    week: 10,
                    disabled: false,
                  },
                  {
                    week: 11,
                    disabled: false,
                  },
                  {
                    week: 12,
                    disabled: false,
                  },
                  {
                    week: 13,
                    disabled: false,
                  },
                  {
                    week: 14,
                    disabled: false,
                  },
                  {
                    week: 15,
                    disabled: false,
                  },
                  {
                    week: 16,
                    disabled: false,
                  },
                  {
                    week: 17,
                    disabled: false,
                  },
                  {
                    week: 18,
                    disabled: false,
                  },
                ],
            },
          ],
        },
        {
          sectionId: 4,
          days: [
            {
              day: 1,
              checkboxs: [
                {
                  week: 1,
                  disabled: false,
                },
                {
                  week: 2,
                  disabled: false,
                },
                {
                  week: 3,
                  disabled: false,
                },
                {
                  week: 4,
                  disabled: false,
                },
                {
                  week: 5,
                  disabled: false,
                },
                {
                  week: 6,
                  disabled: false,
                },
                {
                  week: 7,
                  disabled: false,
                },
                {
                  week: 8,
                  disabled: false,
                },
                {
                  week: 9,
                  disabled: false,
                },
                {
                  week: 10,
                  disabled: false,
                },
                {
                  week: 11,
                  disabled: false,
                },
                {
                  week: 12,
                  disabled: false,
                },
                {
                  week: 13,
                  disabled: false,
                },
                {
                  week: 14,
                  disabled: false,
                },
                {
                  week: 15,
                  disabled: false,
                },
                {
                  week: 16,
                  disabled: false,
                },
                {
                  week: 17,
                  disabled: false,
                },
                {
                  week: 18,
                  disabled: false,
                },
              ],
            },
            {
                day: 2,
                checkboxs: [
                  {
                    week: 1,
                    disabled: false,
                  },
                  {
                    week: 2,
                    disabled: false,
                  },
                  {
                    week: 3,
                    disabled: false,
                  },
                  {
                    week: 4,
                    disabled: false,
                  },
                  {
                    week: 5,
                    disabled: false,
                  },
                  {
                    week: 6,
                    disabled: false,
                  },
                  {
                    week: 7,
                    disabled: false,
                  },
                  {
                    week: 8,
                    disabled: false,
                  },
                  {
                    week: 9,
                    disabled: false,
                  },
                  {
                    week: 10,
                    disabled: false,
                  },
                  {
                    week: 11,
                    disabled: false,
                  },
                  {
                    week: 12,
                    disabled: false,
                  },
                  {
                    week: 13,
                    disabled: false,
                  },
                  {
                    week: 14,
                    disabled: false,
                  },
                  {
                    week: 15,
                    disabled: false,
                  },
                  {
                    week: 16,
                    disabled: false,
                  },
                  {
                    week: 17,
                    disabled: false,
                  },
                  {
                    week: 18,
                    disabled: false,
                  },
                ],
            },
            {
                day: 3,
                checkboxs: [
                  {
                    week: 1,
                    disabled: false,
                  },
                  {
                    week: 2,
                    disabled: false,
                  },
                  {
                    week: 3,
                    disabled: false,
                  },
                  {
                    week: 4,
                    disabled: false,
                  },
                  {
                    week: 5,
                    disabled: false,
                  },
                  {
                    week: 6,
                    disabled: false,
                  },
                  {
                    week: 7,
                    disabled: false,
                  },
                  {
                    week: 8,
                    disabled: false,
                  },
                  {
                    week: 9,
                    disabled: false,
                  },
                  {
                    week: 10,
                    disabled: false,
                  },
                  {
                    week: 11,
                    disabled: false,
                  },
                  {
                    week: 12,
                    disabled: false,
                  },
                  {
                    week: 13,
                    disabled: false,
                  },
                  {
                    week: 14,
                    disabled: false,
                  },
                  {
                    week: 15,
                    disabled: false,
                  },
                  {
                    week: 16,
                    disabled: false,
                  },
                  {
                    week: 17,
                    disabled: false,
                  },
                  {
                    week: 18,
                    disabled: false,
                  },
                ],
            },
            {
                day: 4,
                checkboxs: [
                  {
                    week: 1,
                    disabled: false,
                  },
                  {
                    week: 2,
                    disabled: false,
                  },
                  {
                    week: 3,
                    disabled: false,
                  },
                  {
                    week: 4,
                    disabled: false,
                  },
                  {
                    week: 5,
                    disabled: false,
                  },
                  {
                    week: 6,
                    disabled: false,
                  },
                  {
                    week: 7,
                    disabled: false,
                  },
                  {
                    week: 8,
                    disabled: false,
                  },
                  {
                    week: 9,
                    disabled: false,
                  },
                  {
                    week: 10,
                    disabled: false,
                  },
                  {
                    week: 11,
                    disabled: false,
                  },
                  {
                    week: 12,
                    disabled: false,
                  },
                  {
                    week: 13,
                    disabled: false,
                  },
                  {
                    week: 14,
                    disabled: false,
                  },
                  {
                    week: 15,
                    disabled: false,
                  },
                  {
                    week: 16,
                    disabled: false,
                  },
                  {
                    week: 17,
                    disabled: false,
                  },
                  {
                    week: 18,
                    disabled: false,
                  },
                ],
            },
            {
                day: 5,
                checkboxs: [
                  {
                    week: 1,
                    disabled: false,
                  },
                  {
                    week: 2,
                    disabled: false,
                  },
                  {
                    week: 3,
                    disabled: false,
                  },
                  {
                    week: 4,
                    disabled: false,
                  },
                  {
                    week: 5,
                    disabled: false,
                  },
                  {
                    week: 6,
                    disabled: false,
                  },
                  {
                    week: 7,
                    disabled: false,
                  },
                  {
                    week: 8,
                    disabled: false,
                  },
                  {
                    week: 9,
                    disabled: false,
                  },
                  {
                    week: 10,
                    disabled: false,
                  },
                  {
                    week: 11,
                    disabled: false,
                  },
                  {
                    week: 12,
                    disabled: false,
                  },
                  {
                    week: 13,
                    disabled: false,
                  },
                  {
                    week: 14,
                    disabled: false,
                  },
                  {
                    week: 15,
                    disabled: false,
                  },
                  {
                    week: 16,
                    disabled: false,
                  },
                  {
                    week: 17,
                    disabled: false,
                  },
                  {
                    week: 18,
                    disabled: false,
                  },
                ],
            },
            {
                day: 6,
                checkboxs: [
                  {
                    week: 1,
                    disabled: false,
                  },
                  {
                    week: 2,
                    disabled: false,
                  },
                  {
                    week: 3,
                    disabled: false,
                  },
                  {
                    week: 4,
                    disabled: false,
                  },
                  {
                    week: 5,
                    disabled: false,
                  },
                  {
                    week: 6,
                    disabled: false,
                  },
                  {
                    week: 7,
                    disabled: false,
                  },
                  {
                    week: 8,
                    disabled: false,
                  },
                  {
                    week: 9,
                    disabled: false,
                  },
                  {
                    week: 10,
                    disabled: false,
                  },
                  {
                    week: 11,
                    disabled: false,
                  },
                  {
                    week: 12,
                    disabled: false,
                  },
                  {
                    week: 13,
                    disabled: false,
                  },
                  {
                    week: 14,
                    disabled: false,
                  },
                  {
                    week: 15,
                    disabled: false,
                  },
                  {
                    week: 16,
                    disabled: false,
                  },
                  {
                    week: 17,
                    disabled: false,
                  },
                  {
                    week: 18,
                    disabled: false,
                  },
                ],
            },
            {
                day: 7,
                checkboxs: [
                  {
                    week: 1,
                    disabled: false,
                  },
                  {
                    week: 2,
                    disabled: false,
                  },
                  {
                    week: 3,
                    disabled: false,
                  },
                  {
                    week: 4,
                    disabled: false,
                  },
                  {
                    week: 5,
                    disabled: false,
                  },
                  {
                    week: 6,
                    disabled: false,
                  },
                  {
                    week: 7,
                    disabled: false,
                  },
                  {
                    week: 8,
                    disabled: false,
                  },
                  {
                    week: 9,
                    disabled: false,
                  },
                  {
                    week: 10,
                    disabled: false,
                  },
                  {
                    week: 11,
                    disabled: false,
                  },
                  {
                    week: 12,
                    disabled: false,
                  },
                  {
                    week: 13,
                    disabled: false,
                  },
                  {
                    week: 14,
                    disabled: false,
                  },
                  {
                    week: 15,
                    disabled: false,
                  },
                  {
                    week: 16,
                    disabled: false,
                  },
                  {
                    week: 17,
                    disabled: false,
                  },
                  {
                    week: 18,
                    disabled: false,
                  },
                ],
            },
          ],
        },
        {
          sectionId: 5,
          days: [
            {
              day: 1,
              checkboxs: [
                {
                  week: 1,
                  disabled: false,
                },
                {
                  week: 2,
                  disabled: false,
                },
                {
                  week: 3,
                  disabled: false,
                },
                {
                  week: 4,
                  disabled: false,
                },
                {
                  week: 5,
                  disabled: false,
                },
                {
                  week: 6,
                  disabled: false,
                },
                {
                  week: 7,
                  disabled: false,
                },
                {
                  week: 8,
                  disabled: false,
                },
                {
                  week: 9,
                  disabled: false,
                },
                {
                  week: 10,
                  disabled: false,
                },
                {
                  week: 11,
                  disabled: false,
                },
                {
                  week: 12,
                  disabled: false,
                },
                {
                  week: 13,
                  disabled: false,
                },
                {
                  week: 14,
                  disabled: false,
                },
                {
                  week: 15,
                  disabled: false,
                },
                {
                  week: 16,
                  disabled: false,
                },
                {
                  week: 17,
                  disabled: false,
                },
                {
                  week: 18,
                  disabled: false,
                },
              ],
            },
            {
                day: 2,
                checkboxs: [
                  {
                    week: 1,
                    disabled: false,
                  },
                  {
                    week: 2,
                    disabled: false,
                  },
                  {
                    week: 3,
                    disabled: false,
                  },
                  {
                    week: 4,
                    disabled: false,
                  },
                  {
                    week: 5,
                    disabled: false,
                  },
                  {
                    week: 6,
                    disabled: false,
                  },
                  {
                    week: 7,
                    disabled: false,
                  },
                  {
                    week: 8,
                    disabled: false,
                  },
                  {
                    week: 9,
                    disabled: false,
                  },
                  {
                    week: 10,
                    disabled: false,
                  },
                  {
                    week: 11,
                    disabled: false,
                  },
                  {
                    week: 12,
                    disabled: false,
                  },
                  {
                    week: 13,
                    disabled: false,
                  },
                  {
                    week: 14,
                    disabled: false,
                  },
                  {
                    week: 15,
                    disabled: false,
                  },
                  {
                    week: 16,
                    disabled: false,
                  },
                  {
                    week: 17,
                    disabled: false,
                  },
                  {
                    week: 18,
                    disabled: false,
                  },
                ],
            },
            {
                day: 3,
                checkboxs: [
                  {
                    week: 1,
                    disabled: false,
                  },
                  {
                    week: 2,
                    disabled: false,
                  },
                  {
                    week: 3,
                    disabled: false,
                  },
                  {
                    week: 4,
                    disabled: false,
                  },
                  {
                    week: 5,
                    disabled: false,
                  },
                  {
                    week: 6,
                    disabled: false,
                  },
                  {
                    week: 7,
                    disabled: false,
                  },
                  {
                    week: 8,
                    disabled: false,
                  },
                  {
                    week: 9,
                    disabled: false,
                  },
                  {
                    week: 10,
                    disabled: false,
                  },
                  {
                    week: 11,
                    disabled: false,
                  },
                  {
                    week: 12,
                    disabled: false,
                  },
                  {
                    week: 13,
                    disabled: false,
                  },
                  {
                    week: 14,
                    disabled: false,
                  },
                  {
                    week: 15,
                    disabled: false,
                  },
                  {
                    week: 16,
                    disabled: false,
                  },
                  {
                    week: 17,
                    disabled: false,
                  },
                  {
                    week: 18,
                    disabled: false,
                  },
                ],
            },
            {
                day: 4,
                checkboxs: [
                  {
                    week: 1,
                    disabled: false,
                  },
                  {
                    week: 2,
                    disabled: false,
                  },
                  {
                    week: 3,
                    disabled: false,
                  },
                  {
                    week: 4,
                    disabled: false,
                  },
                  {
                    week: 5,
                    disabled: false,
                  },
                  {
                    week: 6,
                    disabled: false,
                  },
                  {
                    week: 7,
                    disabled: false,
                  },
                  {
                    week: 8,
                    disabled: false,
                  },
                  {
                    week: 9,
                    disabled: false,
                  },
                  {
                    week: 10,
                    disabled: false,
                  },
                  {
                    week: 11,
                    disabled: false,
                  },
                  {
                    week: 12,
                    disabled: false,
                  },
                  {
                    week: 13,
                    disabled: false,
                  },
                  {
                    week: 14,
                    disabled: false,
                  },
                  {
                    week: 15,
                    disabled: false,
                  },
                  {
                    week: 16,
                    disabled: false,
                  },
                  {
                    week: 17,
                    disabled: false,
                  },
                  {
                    week: 18,
                    disabled: false,
                  },
                ],
            },
            {
                day: 5,
                checkboxs: [
                  {
                    week: 1,
                    disabled: false,
                  },
                  {
                    week: 2,
                    disabled: false,
                  },
                  {
                    week: 3,
                    disabled: false,
                  },
                  {
                    week: 4,
                    disabled: false,
                  },
                  {
                    week: 5,
                    disabled: false,
                  },
                  {
                    week: 6,
                    disabled: false,
                  },
                  {
                    week: 7,
                    disabled: false,
                  },
                  {
                    week: 8,
                    disabled: false,
                  },
                  {
                    week: 9,
                    disabled: false,
                  },
                  {
                    week: 10,
                    disabled: false,
                  },
                  {
                    week: 11,
                    disabled: false,
                  },
                  {
                    week: 12,
                    disabled: false,
                  },
                  {
                    week: 13,
                    disabled: false,
                  },
                  {
                    week: 14,
                    disabled: false,
                  },
                  {
                    week: 15,
                    disabled: false,
                  },
                  {
                    week: 16,
                    disabled: false,
                  },
                  {
                    week: 17,
                    disabled: false,
                  },
                  {
                    week: 18,
                    disabled: false,
                  },
                ],
            },
            {
                day: 6,
                checkboxs: [
                  {
                    week: 1,
                    disabled: false,
                  },
                  {
                    week: 2,
                    disabled: false,
                  },
                  {
                    week: 3,
                    disabled: false,
                  },
                  {
                    week: 4,
                    disabled: false,
                  },
                  {
                    week: 5,
                    disabled: false,
                  },
                  {
                    week: 6,
                    disabled: false,
                  },
                  {
                    week: 7,
                    disabled: false,
                  },
                  {
                    week: 8,
                    disabled: false,
                  },
                  {
                    week: 9,
                    disabled: false,
                  },
                  {
                    week: 10,
                    disabled: false,
                  },
                  {
                    week: 11,
                    disabled: false,
                  },
                  {
                    week: 12,
                    disabled: false,
                  },
                  {
                    week: 13,
                    disabled: false,
                  },
                  {
                    week: 14,
                    disabled: false,
                  },
                  {
                    week: 15,
                    disabled: false,
                  },
                  {
                    week: 16,
                    disabled: false,
                  },
                  {
                    week: 17,
                    disabled: false,
                  },
                  {
                    week: 18,
                    disabled: false,
                  },
                ],
            },
            {
                day: 7,
                checkboxs: [
                  {
                    week: 1,
                    disabled: false,
                  },
                  {
                    week: 2,
                    disabled: false,
                  },
                  {
                    week: 3,
                    disabled: false,
                  },
                  {
                    week: 4,
                    disabled: false,
                  },
                  {
                    week: 5,
                    disabled: false,
                  },
                  {
                    week: 6,
                    disabled: false,
                  },
                  {
                    week: 7,
                    disabled: false,
                  },
                  {
                    week: 8,
                    disabled: false,
                  },
                  {
                    week: 9,
                    disabled: false,
                  },
                  {
                    week: 10,
                    disabled: false,
                  },
                  {
                    week: 11,
                    disabled: false,
                  },
                  {
                    week: 12,
                    disabled: false,
                  },
                  {
                    week: 13,
                    disabled: false,
                  },
                  {
                    week: 14,
                    disabled: false,
                  },
                  {
                    week: 15,
                    disabled: false,
                  },
                  {
                    week: 16,
                    disabled: false,
                  },
                  {
                    week: 17,
                    disabled: false,
                  },
                  {
                    week: 18,
                    disabled: false,
                  },
                ],
            },
          ],
        },
      ]
}