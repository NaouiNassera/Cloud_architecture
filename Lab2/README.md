<h1>Create a Virtual Network with multiple subnets.</h1>

<li>virtual network : 10.2.0.0/16</li>
<li>frontend subnet range: 10.2.1.0 - 10.2.1.255</li>
<li>backend subnet range : 10.2.2.0 - 10.2.2.255</li> <br/>


[Virtual network](/Lab2/VNET.png)<br/>
[Frontend subnetwork](/Lab2/SUBNET1.png)<br/>
[Backend subnetwork](/Lab2/SUBNET2.png)<br/>

<h1>Set up Network Security Groups to control inbound and outbound traffic</h1>

<ul>
<li>
command for creating NSG :

az network nsg create --resource-group h3hitema_IOT_GROUP --name NSG_h3hitema_network --location Japan East

</li>
<li> Inbound rules </li>

<ul>
    <li> RDP (TCP/3389): For Windows VMs </li>
    <li> SSH (TCP/22): For Linux VMs </li>
</ul>

</ul>

[Network Security Groups](/Lab2/NSG.png)

<h1>Deploy VMs into specific subnets</h1>
<p> For Network settings : </p>
<ul>
    <li> assign the VM to Frontendsubnet </li>
    <li> assign the VM to BackendSubnet </li>
</ul>

[networking on windows vm](/Lab2/vm_windows_network.png)<br/>
[networking on Linux vm](/Lab2/vm_linux_network.png)

<h1>Configure VNet peering between two VNets </h1>

<ul>
<li> Create a second VNet </li>
<li> Inside the first network peer the first one to the seond , the second one is gonna peered automatically </li>
</ul>

[second network](/Lab2/vnet2.png)<br/>
[characteristics of the second network](/Lab2/Vnet2__.png)<br/>
[primary net peered to second](/Lab2/peered_network.png)<br/>
[second net peered to primary](/Lab2/peered_netw_2.png)<br/>
