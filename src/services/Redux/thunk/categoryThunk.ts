import axios from "../../Axios/axios"

export const getCategories = async () => {
  try {
    const response = await axios.get(`/categories`)
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const addSuperCategory = async (superCategory: string) => {
  try {
    const response = await axios.post(`/categories/add-super-category`, { superCategory })
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const updateSuperCategory = async ({
  superCategory,
  superCategoryId,
}: {
  superCategory: string
  superCategoryId: string | null
}) => {
  try {
    const response = await axios.put(`/categories/update-super-category/${superCategoryId}`, {
      superCategory,
    })
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const addCategory = async ({ category, id }: { category: string; id: string }) => {
  try {
    const response = await axios.put(`/categories/add-category/${id}`, { category })
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const updateCategory = async ({
  category,
  categoryId,
}: {
  category: string
  categoryId: string | null
}) => {
  try {
    const response = await axios.put(`/categories/update-category-name/${categoryId}`, {
      category,
    })
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const addSubCategory = async ({
  subCategory,
  categoryId,
}: {
  subCategory: string
  categoryId: string
}) => {
  try {
    const response = await axios.put(`/categories/add-sub-category/${categoryId}`, {
      subCategory,
    })
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const updateSubCategory = async ({
  subCategory,
  subCategoryId,
}: {
  subCategory: string
  subCategoryId: string | null
}) => {
  try {
    const response = await axios.put(`/categories/update-sub-category/${subCategoryId}`, {
      subCategory,
    })
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}
