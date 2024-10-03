<h1>Create a Recovery Services Vault</h1>

<li>Provide a unique name for your vault</li>

<br/>

[Recovery Services Vault](/Lab10/recovery_services_vault.png)<br/>


<h1>Configure backup for VMs and Azure Files</h1>

<li>Configure Backup for VMs</li>
<ul>
<li>Where is your workload running?: Choose Azure</li>
<li>What do you want to backup?: Select Azure Virtual Machine</li>
<li>Select the VM to back up</li>
<li>Choose a policy</li>
<li>Enable Backup</li>
</ul>

<li>Configure Backup for Azure Files</li>
<ul>
<li>Where is your workload running?: Choose Azure</li>
<li>What do you want to backup?: Select Azure File Shares</li>
<li>Select Storage Account or create one</li>
<li>Select the File Share to back up or create one</li>
<li>Assign a Backup Policy</li>
<li>Enable Backup</li>
</ul>

<br/>


[Configure backup for vm](/Lab10/configure_backup.png)<br/>
[Configure backup for azure file shares](/Lab10/configure_share_files.png)<br/>
[Storage account type](/Lab10/storage_acc_type.png)<br/>
[Create file share](/Lab10/file_share_create.png)<br/>
[enabling permission for backup of file shares](/Lab10/enable_permission.png)<br/>

<h1> Perform a backup and restore operation</h1>

<li>Go to Backup Items</li>
<li>Backup VMs</li>
<li>Pick the VM you want to back up & click back up now</li>
<li>Select Azure File Shares  & Click back up now </li>
<li>Backup Azure Files</li>
<li>Pick the VM you want to back up & click restore now</li>
<li>Select Azure File Shares  & Click restore now</li>
<li> Monitor Backup Jobs</li>

<br/>


[backup Items](/Lab10/backup_items.png)<br/>
[backup a Vm](/Lab10/backup_now.png)<br/>
[restore a VM](/Lab10/restorz_virtual_machine.png)<br/>
[backup azure file](/Lab10/backup_now_shared_files.png)<br/>
[restore azure file](/Lab10/restore_file_share.png)<br/>
[backup Jobs](/Lab10/backup_jobs.png)<br/>

<h1> Implement backup policies and retention </h1>

<li>View/Manage Backup Policies</li>
<li>create new policy & Configure settings</li>

<br/>

[Backup policies](/Lab10/backup_policies.png)<br/>
[New policy](/Lab10/create_policy.png)<br/>

