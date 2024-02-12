<?php

namespace App\Admin\Controllers;

use App\Models\User;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class AdminRegisteredUserController extends AdminController
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
    protected function grid()
    {
        $grid = new Grid(new User());

        $grid->column('id', __('ID'))->sortable();
        $grid->column('name', __('NAME'))->sortable();
        $grid->column('created_at', __('Created at'));
        $grid->column('updated_at', __('Updated at'));
        $grid->column('status', __('Status'))->display(function ($status) {
            return $status ? 'Active' : 'Inactive';
        });
        $grid->model()->where('status', false);
        $grid->disableCreateButton();

        return $grid;
    }

    /**
     * @param $id
     * @return Show
     */
    protected function detail($id): Show
    {
        $show = new Show(User::findOrFail($id));

        $show->field('id', __('ID'));
        $show->field('name', __('NAME'));
        $show->field('created_at', __('Created at'));
        $show->field('updated_at', __('Updated at'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form(): Form
    {
        $form = new Form(new User());

        $form->radio('status', __('Status'))
            ->options([1 => 'Confirm', 0 => 'Cancel']);

        $form->text('userDetail.first_name', __('First Name'));
        $form->text('userDetail.last_name', __('Last Name'));
        $form->mobile('userDetail.phone', __('Phone'));
        $form->text('userDetail.influencer_name', __('Influencer name'));
        $form->text('userDetail.facebook', __('Facebook username'));
        $form->text('userDetail.instagram', __('Instagram username'));
        $form->text('userDetail.tiktok', __('Tiktok username'));
        $form->text('userDetail.youtube', __('Youtube channel ID'));
        $form->text('userDetail.twitter', __('Twitter username'));
        $form->text('userDetail.telegram', __('Telegram username'));
        $form->text('userDetail.account_type', __('Account type'));
        $form->text('userDetail.gender', __('Gender'));
        $form->date('userDetail.birthday', __('Birthday'));
        $form->date('userDetail.language', __('Language'));
        $form->textarea('userDetail.additional_information', __('Additional information'));

        return $form;
    }
}
