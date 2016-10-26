const angular = require("angular")
const url = require("realtime.html")

require("qj-smart-table")
require("./mainTree.js")
require('./track-modal/track-modal.js')
require('./workMode-modal/workMode-modal.js')
require('./carHelper.js')
require('./car-toolbar')
require('./deviceInfoPanel')

angular.module("business.realtime", [
		'smart-table',
		'business.realtime.mainTree',
		'business.realtime.carHelper',
		'business.realtime.trackModal',
		'business.realtime.workModeModal',
		'business.realtime.toolbar',
		'business.realtime.deviceInfoPanel'
	])
	.config(function ($stateProvider) {
		$stateProvider.state("business.realtime", {
			url: '/realtime',
			templateUrl: url,
			controller: 'RealtimeController',
			controllerAs: 'realtime'
		})
	})
	.config(function (cacheCenterProvider) {
		cacheCenterProvider.register('deviceLocationCache', {})
	})

a.map && marker.map.removeOverlay(marker)

a.map && marker.map.removeOverlay(marker)

a.map && removeOverlay()

a.map && delete marker.map

treeNode.children && treeNode.children.forEach(function (node) {
		const data = corpManager.getItem(node.id)
		updateTreeNode(data, node)
	})

$scope.map && ($scope.map.__listeners = null)



if ($scope.map && ($scope.map.__listeners = null)) {
	done()
	d()
} else {
	console.log(`sdf${dd}`)
}

while (a && c++) {
}

while (a && (c = b)) {
}
