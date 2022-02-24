/**
 * 数据扁平化处理
 * @param {*} treeData
 * @param {*} keyField
 * @param {*} nameField
 * @param {*} childrenField
 */
export const getDataList = (treeData, keyField, nameField, childrenField) => {
  const dataList = [];
  function generateList(data, parentNode = {}) {
    data?.forEach(node => {
      const key = `${node[keyField]}`;
      const title = node[nameField];
      dataList.push({ key, title, parentId: parentNode[keyField], ...node });
      if (node[childrenField]) {
        generateList(node[childrenField], node);
      }
    });
  }
  generateList(treeData);
  return dataList;
};
