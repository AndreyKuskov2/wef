data = [
    {
        "id": 9,
        "issueDate": "2023-03-28T09:39:08.284+0000",
        "notes": null,
        "expectedReturnDate": null,
        "returned": 1
    },
    {
        "id": 13,
        "issueDate": "2023-03-28T09:41:23.297+0000",
        "notes": null,
        "expectedReturnDate": null,
        "returned": 0
    },
    {
        "id": 16,
        "issueDate": "2023-03-28T09:42:06.946+0000",
        "notes": null,
        "expectedReturnDate": null,
        "returned": 0
    },
    {
        "id": 19,
        "issueDate": "2023-04-02T13:41:28.508+0000",
        "notes": null,
        "expectedReturnDate": null,
        "returned": 0
    }
]

result = {}
for (var i = 0; i < data.length; i++) {
	data[i].issueDate = data[i].issueDate.slice(0, 10)
	if (data[i].issueDate in result)
		result[data[i].issueDate] = result[data[i].issueDate] + 1;
	else
		result[data[i].issueDate] = 1
}

var a = []
for (var i = 0; i < result.length; i++) {
  a.push([result[i]])
}

console.log(Object.entries(result))