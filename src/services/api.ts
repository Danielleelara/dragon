const BASE_URL = "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1";

export type Dragon = {
  createdAt?: string;
  id?: string;
  name: string;
  type: string;
};

export const getList = async (): Promise<Dragon[]> => {
  const response = await fetch(`${BASE_URL}/dragon`);
  return response.json();
};

export const getDetails = async (id: number): Promise<Dragon> => {
    const response = await fetch(`${BASE_URL}/dragon/${id}`);
    return response.json();
};
  
export const createDragon = async (dragonData: Dragon) => {
    const response = await fetch(`${BASE_URL}/dragon`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dragonData)
        }
    )
    return response.json();
};
  
export const updateDragon = async (id: number, dragonData: Dragon) => {
    const response = await fetch(`${BASE_URL}/dragon/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dragonData)
        }
    )
    return response.json();
};

export const deleteDragon = async (id: number) => {
    const response = await fetch(`${BASE_URL}/dragon/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
        }
    )
    return response.json();
};
  