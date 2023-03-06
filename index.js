// タスクデータ
const tasks = [
  { id: 1, name: "" },
  { id: 2, name: "" },
]

// タスクデータをDOMに追加

// template要素を取得する
const template = document.getElementById('taskTemplate')

// DOMを追加するための要素を取得する
const tbody = document.getElementById("tasks")

// タスクデータを一つずつループさせる
tasks.forEach((t) => {
  // template要素をコピーする
  const clone = template.content.cloneNode(true)

  // HTMLを取得する
  const tr = clone.querySelector("tr")
  const name = clone.querySelector(".name")

  // trタグにid属性を追加する
  tr.setAttribute("id", t.id)

  // タスク名を変更する
  name.textContent = t.name

  // タスクを削除する
  // clickイベントを設定
  const deleteButton = clone.querySelector(".delete")
  deleteButton.addEventListener("click", () => {
    const target = document.getElementById(t.id)
    tbody.removeChild(target)

    document.removeEventListener("click", deleteButton)
  })

  // DOMに追加する
  tbody.appendChild(clone)
})

// タスクを追加する

// イベントハンドラを設定
const form = document.getElementById('form')
form.addEventListener("submit", (event) => {
  // デフォルトの処理をキャンセルする
  event.preventDefault()

  // 入力されたデータを取得
  const input = document.getElementById('input')
  const value = input.value

  if (!value) return

  // 新しいタスクデータを作る
  const task = { id: tasks.length + 1, name: value }

  // 入力した内容をToDoリストに追加
  const clone = template.content.cloneNode(true)
  const tr = clone.querySelector("tr")
  const name = clone.querySelector(".name")

  tr.setAttribute("id", task.id)
  name.textContent = task.name

  const deleteButton = clone.querySelector(".delete")
  deleteButton.addEventListener("click", () => {
    const target = document.getElementById(task.id)
    tbody.removeChild(target)

    document.removeEventListener("click", deleteButton)
  })

  tbody.appendChild(clone)
})

// 全てのタスクの削除
const deleteAllButton = document.getElementById("deleteAll")

deleteAllButton.addEventListener("click", () => {
  const tbody = document.getElementById("tasks")
  tbody.innerHTML = ""
})
