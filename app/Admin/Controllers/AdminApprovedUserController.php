<?php

namespace App\Admin\Controllers;

use App\Http\Controllers\JoinController;
use App\Models\User;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class AdminApprovedUserController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Register Users';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid(): Grid
    {
        $grid = new Grid(new User());

        $grid->column('id', __('ID'))->sortable();
        $grid->column('userDetail.first_name', __('FIRST NAME'))->sortable();
        $grid->column('userDetail.last_name', __('LAST NAME'))->sortable();
        $grid->column('userDetail.phone', __('PHONE'))->sortable();
        $grid->column('email', __('EMAIL'))->sortable();
        $grid->column('status', __('Status'))->display(function ($status) {
            return $status ? 'Active' : 'Inactive';
        });
        $grid->model()->where('status', true);
        $grid->disableCreateButton();

        return $grid;
    }

    /**
     * @param $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(User::findOrFail($id));

        $show->field('id', __('ID'));
        $show->field('created_at', __('Created at'));
        $show->field('updated_at', __('Updated at'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new User());

        $form->radio('status', __('Status'))
            ->options([1 => 'Confirm', 0 => 'Cancel']);

        $form->text('userDetail.first_name', __('First Name'));
        $form->text('userDetail.last_name', __('Last Name'));
        $form->mobile('userDetail.phone', __('Phone'));
        $form->text('userDetail.influencer_name', __('Influencer name'));
        $form->text('userDetail.facebook', __('Facebook username'))->disable();
        $form->text('userDetail.instagram', __('Instagram username'))->disable();
        $form->text('userDetail.tiktok', __('Tiktok username'))->disable();
        $form->text('userDetail.youtube', __('Youtube channel ID'))->disable();
        $form->text('userDetail.twitter', __('Twitter username'))->disable();
        $form->text('userDetail.telegram', __('Telegram username'))->disable();
        $form->text('userDetail.account_type', __('Account type'));
        $form->text('userDetail.gender', __('Gender'));
        $form->date('userDetail.birthday', __('Birthday'));
        $form->date('userDetail.language', __('Language'));
        $form->textarea('userDetail.additional_information', __('Additional information'));

        return $form;
    }
}
