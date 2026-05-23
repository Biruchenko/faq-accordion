const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');

if (tabs) {
	tabs.forEach(tab => {
		tab.addEventListener('click', () => {
			// If tab is already open, close it and stop
			if (tab.classList.contains('open')) {
				tab.setAttribute('aria-selected', 'false');
				tab.classList.remove('open');
				const panel = document.getElementById(tab.getAttribute('aria-controls'));
				panel.setAttribute('aria-hidden', 'true');
				panel.classList.remove('open');
				return;
			}
			// Close all other tabs
			tabs.forEach(tabItem => {
				tabItem.setAttribute('aria-selected', 'false');
				tabItem.classList.remove('open');
			});
			panels.forEach(panel => {
				panel.setAttribute('aria-hidden', 'true');
				panel.classList.remove('open');
			});
			// Open the clicked tab
			tab.setAttribute('aria-selected', 'true');
			tab.classList.add('open');
			const associatedPanel = tab.getAttribute('aria-controls');
			const panel = document.getElementById(associatedPanel);
			panel.setAttribute('aria-hidden', 'false');
			panel.classList.add('open');
		});
	});
}
