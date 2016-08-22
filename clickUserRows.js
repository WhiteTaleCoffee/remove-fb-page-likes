function clickRows (max, start, end) {
	console.group('Clicking!...')
	let totalClicked = 0

	// Get all rows.
	const $rows = document
	.querySelector('._54_6._4-ss._4-sv')
	.querySelectorAll('tr[class]')

	// Loop through each row.
	// I've used for() instead of Array.forEach() because I need
	// to be able to break the loop when the limit is reached.
	for (let i = 0; i <= $rows.length; i++) {
		if (!$rows[i] || totalClicked === max) break

			const $row = $rows[i]
			const utime = parseInt($row.cells[2].querySelector('abbr').getAttribute('data-utime'))

			// If the row is not within the time range, then skip.
			if (!(utime >= start && utime <= end)) continue

				$row.cells[0].querySelector('input').click()
				totalClicked++
					console.log(`Total clicked: ${totalClicked}`)
	}

	console.log(`Finished! Clicked a total of ${totalClicked} rows.`)
	console.groupEnd()
}

// Usage example: click the first 100 rows, starting on date `1448662964`
// and finishing on date `1449120938`
clickRows(100, 1448662964, 1449120938)
